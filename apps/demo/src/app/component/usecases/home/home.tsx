import styles from "./home.module.scss";
import Wrapper from "../../hoc/wrapper/wrapper";
import { useEffect, useState } from "react";
import { keys } from "lodash";
import BackDrop from "../../ui/back-drop/back-drop";
import Modal from "../../ui/modal/modal";

function Home() {

  useEffect(() => {
    // const values: any = {
    //   a: 2,
    //   b: 1,
    //   c: 4
    // };
    // const a = Object.keys(values);
    // const b = a.map((key) => {
    //   return [...Array(values[key])].map((_,i)=>{
    //     console.log("key",key,i);
    //   });
    // });
    // console.log();
  });

  return (
    <Wrapper className="container-xxl card">
      <div className="card-header bg-light bg-gradient opacity-75 mt-1">
        <b>صفحه اصلی</b>
      </div>
      <div className="card-body">
        <h5>به سایت دمو خوش آمدید</h5>
        <p>برای وارد شدن به سایت وارد حساب کاربری شوید</p>
      </div>
    </Wrapper>
  );
}

export default Home;
