import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { logout } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="pb-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={assets.logo} alt="logo" className="max-w-40" />

        {/* Menu */}
        <div className="relative py-2">
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="max-h-5 cursor-pointer"
            onClick={toggleMenu} // toggle on click
          />

          {/* Dropdown */}
          <div
            className={`absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 transition-all duration-200
              ${menuOpen ? "block" : "hidden"}`}
          >
            <p
              onClick={() => {
                navigate("/profile");
                setMenuOpen(false); // close after click
              }}
              className="cursor-pointer text-sm"
            >
              Edit Profile
            </p>
            <hr className="my-2 border-t border-gray-500" />
            <p
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="cursor-pointer text-sm"
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
