import { UserModel } from "../../../../common/models";
import { useEffect, useLayoutEffect, useState } from "react";
import style from "./show-user.module.scss";
import Wrapper from "../../../hoc/wrapper/wrapper";
import { useNavigate } from "react-router-dom";


function ShowUser(props: { index: number, user: UserModel, change: (event: any) => void }) {

  const navigate=useNavigate();

  const styles = {
    backgroundColor: "yellow"
  };

  const setClasses = () => {
    if (props.index % 2 === 0) {
      return style["titleRed"];
    } else {
      return style["titleBlue"];
    }
  };
  const classes = ["pt-5", setClasses()];

  let inputElement: HTMLInputElement | null;

  useLayoutEffect(() => {
    console.log("sunc start show-user component");
  });

  useEffect(() => {
    console.log("start show-user component");
    if (props.index === 0) {
      inputElement?.focus();
    }
    return () => {
      console.log("stop show-user component");
    };
  }, [props.index]);


  return (
    <Wrapper className={"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"}>
          <div className="row mt-3 p-1 border">
            <div className="col-6">
              <img src={props.user.avatar} />
            </div>
            <div className="col-auto">
              <div className={classes.join(" ")}>{props.user.firstName} {props.user.lastName}</div>
            </div>
            <div className="col-12 pt-3">
          <input ref={(input) => {
            inputElement = input;
          }} type="text" className="form-control" onChange={props.change} value={props.user.firstName} />
            </div>
            <div className="col-auto pt-3">
              <button onClick={()=>navigate(`/users/${props.user.id}`)}  className="btn btn-outline-info ms-2">نمایش جزئیات</button>
              <button className="btn btn-outline-info">سفارشات</button>
            </div>
          </div>
    </Wrapper>
  );
}

export default ShowUser;
