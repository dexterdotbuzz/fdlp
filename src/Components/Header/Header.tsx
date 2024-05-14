// Header.js


import { FiArrowRight } from "react-icons/fi";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between bg-[#E2E0DB] items-center px-4 py-1  text-slate-700">
      <a href="/" className="p-2">
        <img
          className="h-8 w-auto"
          src={logo}
          alt="logo"
        />
      </a>

      <a href="login" className="p-2 font-semibold hover:text-gray-300">
        <span>Login <FiArrowRight className="inline-block" /></span>
      </a>
    </header>
  );
};

export default Header;
