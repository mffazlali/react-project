import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import Wrapper from "../../hoc/wrapper/wrapper";
import Toolbar from "../navigation/toolbar/toolbar";

function Header(props: { auth: boolean, login: () => void }) {
  const changeBtnStyle = props.auth ?'mt-1 ms-2 float-end btn btn-outline-dark bg-gradient shadow w-auto bi bi-box-arrow-right':'mt-1 ms-2 float-end btn btn-outline-dark bg-gradient shadow w-auto bi bi-box-arrow-left'
  return (
    <header className="bg-info bg-gradient text-white pt-1 pb-5">
      <div className="d-flex ">
        <div className="flex-grow-1">
          <img style={{ width: "80px", height: "40px" }} src="../../../../assets/logo/demo.png"
               className="mt-1 ms-1 rounded img-fluid" alt="..."></img>
        </div>
         <div className="flex-grow-1">
           <button className={changeBtnStyle}
                  onClick={props.login}></button>
         </div>

      </div>
    </header>
  );
}

export default Header;
