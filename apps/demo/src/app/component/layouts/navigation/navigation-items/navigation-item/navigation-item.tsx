import "./navigation-item.scss";
import { NavLink } from "react-router-dom";
import React from "react";

const NavigationItem=(props: { to: any, title: string })=> {
  return (
    <li className="nav-item navigationItem"><NavLink className="nav-link link-light" to={props.to}>{props.title}</NavLink></li>
  );
}

export default NavigationItem;
