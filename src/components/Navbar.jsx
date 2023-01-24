import React, { useEffect } from "react";
import Button from "./Button";

const Navbar = ({ currentTab }) => {
  const _currenttab = currentTab.toLowerCase();
  const tabs = ["home", "whitepaper", "developers", "blog"];

  useEffect(() => {
    // console.log("Navbar mounted");

    // console.log(_currenttab);
    const link = document.querySelector(`#${_currenttab}`);
    // console.log(link);
    link.className = "text-black";

    tabs.forEach((tab) => {
      if (tab !== _currenttab) {
        const link = document.getElementById(tab);
        link.className = "text-gray-500";
      }
    });
  }, [_currenttab]);

  const ChangeSelected = (e) => {
    tabs.forEach((tab) => {
      if (tab !== e.target.id) {
        const link = document.getElementById(tab);
        link.className = "text-gray-500";
      }
    });
    // console.log(e.target);
    const link = e.target;
    link.className = "text-black";
  };

  return (
    <div className="flex justify-between items-center pt-10">
      <img className=" h-10" src="/images/berkly-logo.svg" alt="Berkly" />
      <ul className="flex">
        <li className="px-5">
          <button className="text-black" id="home" onClick={ChangeSelected}>
            Home
          </button>
        </li>
        <li className="px-5">
          <button className="text-gray-500" id="whitepaper" onClick={ChangeSelected}>
            Whitepaper
          </button>
        </li>
        <li className="px-5">
          <button className="text-gray-500" id="developers" onClick={ChangeSelected}>
            Developers
          </button>
        </li>
        <li className="px-5">
          <button className="text-gray-500" id="blog" onClick={ChangeSelected}>
            Blog
          </button>
        </li>
      </ul>
      <Button text="Launch App" />
    </div>
  );
};

export default Navbar;
