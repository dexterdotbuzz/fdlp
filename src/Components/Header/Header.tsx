// Header.js


import { FiArrowRight } from "react-icons/fi";
import logo from "../../assets/logo.svg";

const Header = () => {
return (
<header classname="hidden md:flex justify-between bg-[#E2E0DB] items-center px-4 py-1 text-slate-700">
<a href="/" classname="p-2">
<img classname="h-8 w-auto" src alt="logo" />
</a>

<a href="https://app.feeldesign.ai" classname="p-2 font-semibold hover:text-gray-800">
<span>Login <FiArrowRight className="inline-block" /></span>
</a>
</header>
);
};

export default Header;
