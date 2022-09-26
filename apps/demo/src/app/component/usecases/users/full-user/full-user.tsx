import { useEffect, useState } from "react";
import { UserService } from "../../../../common/services";
import Wrapper from "../../../hoc/wrapper/wrapper";
import { useLocation, useNavigate, useNavigationType, useParams } from "react-router-dom";
import { Action } from "history";
import { useDispatch, useSelector } from "react-redux";
import { changeSpinners } from "../../../../common/store/reducers/spinner-reducer";
import { RootState } from "../../../../common/store/store";
import { useAppSelector, useAppDispatch } from "../../../../common/store/hooks";
import { deleteById, fetchById } from "../../../../common/store/reducers/user-reducer";
import { showModal } from "../../../../common/store/reducers/modal-reducer";

function FullUser() {

  const [userData, setUserData] = useState<any>(null);
  const userService = new UserService();
  let userId = useParams<{ id: string }>().id;
  const navigate = useNavigate();
  let navigation = useNavigationType();
  navigation = Action.Replace;
  const location = useLocation();
  const dispatch = useAppDispatch();


  useEffect(() => {
    console.log("start fullUser component");
    if (userId !== undefined) {
      setSpMode(true);
      dispatch(fetchById(Number(userId)))
        .unwrap()
        .then(result => {
          setSpMode(false);
          if (result.responseCode === 200) {
            setUserData(result.result);
          }
        })
        .catch(e => {
          console.log("e", e);
        });
    }
    return () => {
      userId = undefined;
      console.log("stop fullUser component");
    };
  }, [userId]);

  const setSpMode = (mode: boolean) => {
    dispatch(changeSpinners(mode));
  };

  const btnDelete = () => {
    setSpMode(true);
    dispatch(deleteById(Number(userId)))
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


  const renderUser = () => {
    if (userId) {
      if (userData) {
        return (
          <div className={"border row"}>
            <div className={"col-auto"}>
              <label>number</label><br />
              <span>{userData.id}</span>
            </div>
            <div className={"col-auto"}>
              <label>username</label><br />
              <span>{userData.username}</span>
            </div>
            <div className={"col-auto"}>
              <label>phone</label> <br />
              <span>{userData.phone}</span>
            </div>
            <div className={"col-auto"}>
              <label>email</label> <br />
              <span>{userData.email}</span>
            </div>
            <div className={"col-auto"}>
              <label>website</label> <br />
              <span>{userData.website}</span>
            </div>
            <div className={"col-auto"}>
              <label>address</label><br />
              <span>{userData.address.city} {userData.address.street} {userData.address.suite}</span>
            </div>
            <div className={"row"}>
              <div className="col-12 pt-4 pb-3 d-flex justify-content-center">
                <button className="btn btn-outline-danger w-25" onClick={btnDelete}>حذف</button>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return <div>کاربر مورد نظر انتخاب نشده است</div>;
    }
  };

  return (
    <Wrapper className="container-xxl card">
      <div className="card-header bg-light bg-gradient opacity-75 mt-1 mt-1">
        <div className="d-flex">
          <div className="flex-grow-1">
            <b>نمایش اطلاعات بیشتر کاربر انتخاب شده</b>
          </div>
          <div className="">
            <button onClick={() => navigate("../")}
                    className="btn btn-outline-dark bg-gradient shadow rounded-circle bi bi-x-lg"></button>
          </div>
        </div>
      </div>
      <div className="card-body">
        {renderUser()}
      </div>
    </Wrapper>
  );
}

export default FullUser;
