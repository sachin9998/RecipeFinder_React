import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";

const FavouritePage = () => {
  const fav = JSON.parse(localStorage.getItem("favorites")) || [];

  console.log(fav);

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto ">
        <p className="font-bold text-3xl md:text-5xl my-4 ">My Favorites</p>

        {fav.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img className="h-3/4 " src="./404.svg" alt="No Favorites found" />
          </div>
        )}

        {fav && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {fav.map((item) => {
              return (
                <RecipeCard
                  key={item.idMeal}
                  recipe={item}
                  {...getRandomColor()}
                />
              );
            })}
          </div>
        )}

        {/* <RecipeCard key={recipe.idMeal} recipe={recipe} {...getRandomColor()} /> */}
      </div>
    </div>
  );
};

export default FavouritePage;
