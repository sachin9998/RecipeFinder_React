import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchRecipes(searchQuery) {
    setLoading(true);
    setError(null);
    try {
      const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

      const resp = await fetch(`${baseURL}${searchQuery || "Chicken"}`);

      const data = await resp.json();

      console.log(data);

      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]); // Handle case when no recipes are found
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching recipes.");
    } finally {
      setLoading(false);
    }
  }

  // Fetch recipes whenever `query` changes
  useEffect(() => {
    fetchRecipes(query);
  }, [query]);

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        {/* Search Input */}
        <form
          onSubmit={(e) => e.preventDefault()} // Prevent form submission
          className="mb-4"
        >
          <label
            htmlFor="recipe-search"
            className="input shadow-md flex items-center gap-2"
          >
            <Search size={24} />
            <input
              id="recipe-search"
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          {query ? `Results for "${query}"` : "Recommended Recipes"}
        </h1>

        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          {query ? "Search Results" : "Popular Choices"}
        </p>

        {/* Display Loader or Error */}
        {loading && (
          <div className="flex justify-center items-center h-[50vh]">
            <Loader />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display Recipes */}
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.length > 0
            ? recipes.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
              ))
            : !loading && <p>No recipes found. Try a different query.</p>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
