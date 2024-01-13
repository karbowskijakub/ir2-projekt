import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="relative font-bold align-top w-full h-20 bg-tetnary flex justify-between items-center font text-xl text-white ">
      <div className="min-w-24"></div>
      <div className="abba">
        <h1>Wyznaczanie GNR</h1>
      </div>
      <div className="mr-10">
        <ul className="flex justify-center flex-row">
          <li className="cursor-pointer p-4 ">
            <NavLink to="/">Wykres GNR</NavLink>
          </li>
          <li className="cursor-pointer  p-4">
            <NavLink to="/methods">Metody GNR</NavLink>
          </li>
          <li className="cursor-pointer p-4 ">
            <NavLink to="/instruction">Instrukcja</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
