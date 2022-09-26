import "./navigation-items.scss";
import Wrapper from "../../../hoc/wrapper/wrapper";
import NavigationItem from "./navigation-item/navigation-item";
import { NavLink } from "react-router-dom";
import React from "react";

const NavigationItems = () => {
  return (
    <ul className="navbar-nav nav navigationItems">
      <NavigationItem to={"/"} title={"صفحه اصلی"} />
      <NavigationItem to={"/users"} title={"لیست کاربران"} />
      <NavigationItem to={{
        pathname: "/new-user",
        hash: "#submit",
        search: "?color=true"
      }} title={"ایجاد کاربر"} />
    </ul>
  );
};

export default NavigationItems;
