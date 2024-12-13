const FavouritePage = () => {
  const fav = false;

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto ">
        <p className="font-bold text-3xl md:text-5xl my-4 ">My Favorites</p>

        {!fav && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img className="h-3/4 " src="./404.svg" alt="No Favorites found" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouritePage;
