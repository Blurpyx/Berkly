import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-10">
      <img className=" h-10" src="/images/berkly-logo.svg" alt="Berkly" />
      <ul className="flex" >
        <li className="px-5" >
          <a className="text-black" href="#">Home</a>
        </li>
        <li className="px-5" >
          <a className="text-gray-500" href="#">Whitepaper</a>
        </li>
        <li className="px-5" >
          <a className="text-gray-500" href="#">Developers</a>
        </li>
        <li className="px-5" >
          <a className="text-gray-500" href="#">Blog</a>
        </li>
      </ul>
      <Button text="Launch App" />
    </div>
  );
};

export default Navbar;
