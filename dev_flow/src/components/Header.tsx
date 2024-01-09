import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-[70px] w-full flex justify-center items-center">
      <div className="flex gap-32 text-[12px] uppercase font-bold ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-gray-500 transition duration-300 font-bold text-2xl ${isActive}`
          }
        >
          Create Task
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-gray-500 transition duration-300 font-bold text-2xl ${isActive}`
          }
        >
          Tasks
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
