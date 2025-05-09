import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { useDarkModeStore } from "../state/darkmode";
import { DarkModeStore } from "../state/darkmode";
function Nav() {
  const { darkMode, toggleDarkMode }: DarkModeStore = useDarkModeStore();
  return (
    <div
      className="font-nunito bg-[var(--light-mode-bg)] dark:bg-[var(--dark-mode-bg)] min-h-screen w-screen flex flex-col max-sm:gap-2
                   text-[var(--light-mode-text)] dark:text-white transition-all duration-300 ease-in-out"
    >
      <div
        className="z-100 sticky top-0 left-0 flex justify-between bg-white dark:bg-[var(--dark-mode-elements)] py-4
                          w-screen h-16 items-center 
                        px-20 shadow-sm shadow-gray-200 dark:shadow-gray-800 max-sm:px-4 max-sm:gap-2"
      >
        <h1 className="text-xl font-[800] select-none">where is the world?</h1>
        <div className="flex gap-4 items-center justify-center max-sm:gap-2">
          {darkMode ? (
            <IoMoonSharp
              className=" text-lg cursor-pointer"
              onClick={toggleDarkMode}
            />
          ) : (
            <IoMoonOutline
              className="text-lg cursor-pointer"
              onClick={toggleDarkMode}
            />
          )}
          <p className="flex-1 font-[600] text-md select-none">Dark Mode</p>
        </div>
      </div>
      <div className="w-screen px-20 py-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Nav;
