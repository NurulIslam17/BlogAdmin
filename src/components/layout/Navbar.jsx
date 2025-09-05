import { useContext } from "react";
import { AuthContext } from "../../contex/AuthContext";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="bg-[#CAD3C8] py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">
        Welcome, {user?.name}
      </h1>
      <div className="flex items-center gap-4">
        <img
          src="https://placehold.co/20x20"
          className="w-[20px] h-[20px] border-2 border-gray-500 rounded-full"
          alt=""
          srcSet=""
        />
        <button onClick={logout} className="font-bold cursor-pointer">
          <CiLogout />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
