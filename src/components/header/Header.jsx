import React from "react";
import Logo from "../logo/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCartAlt } from "react-icons/bi";
import {MdFavoriteBorder} from "react-icons/md"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center shadow-md">
      <Link to="/">
        <Logo/>
      </Link>
      <div className="flex text-gray-800 gap-5">
        <Link to="cart">
          <BiCartAlt size={22} />
        </Link>
        <Link to="wishlist">
          <MdFavoriteBorder size={22} />
        </Link>
        <div className="visible md:hidden cursor-pointer">
          <GiHamburgerMenu size={22} />
        </div>
      </div>
    </div>
  );
};

export default Header;
