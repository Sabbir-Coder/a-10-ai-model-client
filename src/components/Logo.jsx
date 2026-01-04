import React from "react";
import { Link } from "react-router";
import logo from "../../public/logo.png";

const Logo = () => {
    return (
        <Link to={"/"} className="w-10 md:w-14">
            <img src={logo} alt="" />
        </Link>
    );
};

export default Logo;
