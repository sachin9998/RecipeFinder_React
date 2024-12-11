import { Search } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label
            htmlFor=""
            className="input shadow-md flex items-center gap-2 "
          >
            <Search size={24}/>
            <input type="text" className="text-sm md:text-md grow" placeholder="What do you want to cook today?"/>
          </label>
        </form>

        <p className="font-bold text"></p>
        <p></p>
      </div>
    </div>
  );
};

export default HomePage;
