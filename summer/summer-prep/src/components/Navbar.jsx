import { Outlet, Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="bg-red-900 p-4 flex flex-row justify-between items-center w-full">
      <Link to="/">
      <p className="text-white text-2xl">habit tracker</p>
      </Link>
      <Link to="/streak">
      <p className="text-white text-2xl">Streak</p>
      </Link>
    </nav>
  );
};

export default Navbar;