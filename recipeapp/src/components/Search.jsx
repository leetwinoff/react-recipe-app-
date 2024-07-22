import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "586b92faba9348e2b70575e562ddebee";

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");
  //Syntax of a useEffect hook 1. we pass CallBack Function and 2. dependecie array
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      setFoodData(data.results)
    }
    fetchFood();
  }, []);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
