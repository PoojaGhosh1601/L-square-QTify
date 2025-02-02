import LogoImage from "../../../Assets/logo.png";
import React from "react";
import "../Logo/Logo.css"

/**
 * Represents the logo component.
 * Renders an image as a logo.
 * @returns {JSX.Element} The rendered logo component.
 */
const Logo = () => {
  return <img className="logo" src={LogoImage} alt="Logo" />;
};

export default Logo;
