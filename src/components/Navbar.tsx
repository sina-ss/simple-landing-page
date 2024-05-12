import React from "react";
import Link from "next/link";
import { FaDribbble, FaBehance } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center items-center gap-11 container mt-20 px-4 py-2 max-w-4xl">
      <Link
        className="text-dm-sans font-medium text-lg leading-6 opacity-30"
        href="#"
      >
        Home
      </Link>
      <Link className="text-dm-sans font-medium text-lg leading-6" href="#">Features</Link>
      <Link className="text-dm-sans font-medium text-lg leading-6" href="#">Pricing</Link>
      <Link className="text-dm-sans font-medium text-lg leading-6" href="#">Blog</Link>
      <Link className="text-dm-sans font-medium text-lg leading-6" href="#">
        <FaDribbble />
      </Link>
      <Link className="text-dm-sans font-medium text-lg leading-6" href="#">
        <FaBehance />
      </Link>
    </nav>
  );
};

export default Navbar;
