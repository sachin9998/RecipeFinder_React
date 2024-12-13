import { ShoppingBasket, ShoppingBag, Heart, Soup } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
      <a href={recipe.strYoutube} target="_blank" className="relative h-32 ">
        <img
          className="rounded-md w-full h-full object-cover cursor-pointer"
          src={recipe.strMealThumb}
          alt="recipe image"
        />

        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> {recipe.strArea}
        </div>

        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.strMeal}</p>
      </div>

      <p className="my-2 ">
        {recipe.strInstructions.substring(0, 100)} <span className="font-bold">Read More...</span>
      </p>

      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <ShoppingBag size={16} />{" "}
          <span className="text-sm tracking-tighter font-semibold">
            {recipe.strIngredient1}
          </span>
        </div>
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
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
