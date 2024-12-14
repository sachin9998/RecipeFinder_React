import { Heart, ShoppingBag, ShoppingBasket, Soup } from "lucide-react";
import { useState } from "react";

const RecipeCard = ({ recipe, bg, badge }) => {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.idMeal)
  );

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeAlreadyInFavorites = favorites.some(
      (fav) => fav.idMeal === recipe.idMeal
    );

    if (isRecipeAlreadyInFavorites) {
      favorites = favorites.filter((fav) => fav.idMeal !== recipe.idMeal);
      setIsFavorite(false);
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div
      className={`flex flex-col rounded-md bg-[#ecf7d4] ${bg} overflow-hidden p-3 relative`}
    >
      <a href={recipe.strYoutube} target="_blank" className="relative h-32 ">
        <div className="skeleton absolute inset-0" />
        <img
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500 "
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
          src={recipe.strMealThumb}
          alt="recipe image"
        />

        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> {recipe.strArea}
        </div>

        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorites();
          }}
        >
          {!isFavorite && (
            <Heart
              size={20}
              className="hover:fill-red-500 hover:text-red-500"
            />
          )}

          {isFavorite && (
            <Heart size={20} className="fill-red-500 text-red-500" />
          )}
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.strMeal}</p>
      </div>

      <p className="my-2 ">
        {recipe.strInstructions.substring(0, 100)}{" "}
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Read More...
        </a>
      </p>

      <div className="flex gap-2 mt-auto">
        <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
          <ShoppingBag size={16} />{" "}
          <span className="text-sm tracking-tighter font-semibold">
            {recipe.strIngredient1}
          </span>
        </div>
        <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
          <ShoppingBasket size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            {recipe.strIngredient2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
