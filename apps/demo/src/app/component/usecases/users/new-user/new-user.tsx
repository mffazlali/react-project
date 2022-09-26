import styles from "./new-user.module.scss";
import Wrapper from "../../../hoc/wrapper/wrapper";
import { useState } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import { Action } from "history";
import { changeSpinners } from "../../../../common/store/reducers/spinner-reducer";
import { add } from "../../../../common/store/reducers/user-reducer";
import { UserModel } from "../../../../common/models";
import { useAppDispatch, useAppSelector } from "../../../../common/store/hooks";
import { showModal } from "../../../../common/store/reducers/modal-reducer";

function NewUser() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [webSite, setWebsite] = useState("");
  const navigate = useNavigate();
  let navigation = useNavigationType();
  navigation = Action.Push;
  const dispatch = useAppDispatch();
  const setSpMode = (mode: boolean) => {
    dispatch(changeSpinners(mode));
  };

  const btnSave = () => {
    setSpMode(true);
    const data: UserModel = {
      name: firstName + " " + lastName,
      email,
      website: "",
      firstName,
      lastName,
      avatar: "",
      address: { geo: { lng: "", lat: "" }, city: "", street: "", suite: "", zipcode: "" },
      company: { name: "", bs: "", catchPhrase: "" },
      phone: "",
      username: ""
    };
    dispatch(add(data))
      .unwrap()
      .then(result => {
        setSpMode(false);
        if (result.responseCode === 200) {
          dispatch(showModal({ title: "پیام", message: "عملیات با موفقیت انجام شد" }));
        } else {
          dispatch(showModal({ title: "پیام", message: "خطا در فراخوانی سرویس" }));
        }
      })
      .catch(e => {
        dispatch(showModal({ title: "پیام", message: "امکان ارایه سرویس وجود ندارد" }));
      });
  };

  return (
    <Wrapper className="container card">
      <div className="card-header  bg-light bg-gradient opacity-75 mt-1">
        <b>ثبت کاربر</b>
      </div>
      <div className="card-body">
        <div className="row container container-sm border m-1 p-2 bg-light">
          <div className="col-12 col-sm-3">
            <label className="form-label">firstName</label><br />
            <input style={{ width: "90%" }} className="form-control" type="text" value={firstName}
                   onChange={(event) => setFirstName(event.target.value)} />
          </div>
          <div className="col-12 col-sm-3">
            <label className="form-label">lastName</label><br />
            <input style={{ width: "90%" }} className="form-control" type="text" value={lastName}
                   onChange={(event) => setLastName(event.target.value)} />
          </div>
          <div className="col-12 col-sm-3">
            <label className="form-label">email</label><br />
            <input style={{ width: "90%" }} className="form-control" type="email" value={email}
                   onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="col-12 col-sm-3">
            <label className="form-label">webSite</label><br />
            <input style={{ width: "90%" }} className="form-control" type="url" value={webSite}
                   onChange={(event) => setWebsite(event.target.value)} />
          </div>
          <div className="col-12 col-sm-12 pt-4 d-flex justify-content-center">
            <button className="btn btn-outline-success w-25" onClick={btnSave}>ذخیره</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default NewUser;
