import "./toolbar.scss";
import { NavLink } from "react-router-dom";
import SlideDrawer from "../../slide-drawer/slide-drawer";
import React from "react";
import NavigationItems from "../navigation-items/navigation-items";

const Toolbar = (props: { setShow: () => void }) => {
  return (
    <nav style={{ zIndex: "100" }} className="navbar navbar-expand bg-dark bg-gradient p-0 toolbar">
      <div className="d-flex w-100 bg-info bg-gradient bg-opacity-25 pe-3 pb-1 pt-1">
        <div className="flex-grow-1">
          <NavigationItems />
        </div>
        <div>
        </div>
        <div className="menu">
          <button className="btn btn-link float-end text-light bg-gradient bi bi-list rounded-circle"
                  onClick={props.setShow} />
        </div>
      </div>
    </nav>

  );
};

export default Toolbar;
