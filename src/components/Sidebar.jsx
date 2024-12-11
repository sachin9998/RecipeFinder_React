import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full ">
          <img src="./logo.svg" alt="Logo" className="hidden md:block" />
          <img src="./mobile-logo.svg" alt="Logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
            <Link to={"/"}>
                <span className="font-bold hidden md:block "></span>
            </Link>
            <Link to={"/favorites"}>Favorites</Link>
        </ul>
      </div>
    </div>
  );
};
const MobileSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block"></div>
  );
};
