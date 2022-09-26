import { UserModel } from "../../../common/models";
import ShowUser from "./show-user/show-user";
import { useEffect, useState } from "react";
import Wrapper from "../../hoc/wrapper/wrapper";
import { faker } from "@faker-js/faker/locale/fa";
import { Outlet } from "react-router-dom";
import { changeSpinners } from "../../../common/store/reducers/spinner-reducer";
import { fetchAll, storeUsers } from "../../../common/store/reducers/user-reducer";
import { useAppSelector, useAppDispatch } from "../../../common/store/hooks";

const Users = () => {


  // const [getAll, user] = useGetAllMutation();

  const [users, setUsers] = useState<UserModel[]>([]);
  const [displayUsers, setDisplayUsers] = useState(true);
  const userSelector = useAppSelector((state: any) => state.user);
  const dispatch = useAppDispatch();
  let serviceMode = true;

  useEffect(() => {
    console.log("start users component");
    if (serviceMode && users.length === 0 && userSelector.users.length === 0) {
      getAllUserAPI();
    } else {
      setUsers(userSelector.users);
    }
    return () => {
      serviceMode = false;
      console.log("stop users component");
    };
  }, []);

  const getAllUserAPI = () => {
    setSpMode(true);
    dispatch(fetchAll())
      .unwrap()
      .then(result => {
        setSpMode(false);
        if (result.responseCode === 200) {
          const tempUsers: UserModel[] = [];
          result.result.forEach((user: any) => {
            const [firstName, lastName] = user.name.toString().split(" ");
            tempUsers.push({ ...user, firstName, lastName, avatar: faker.image.avatar() });
          });
          setUsers(tempUsers);
          dispatch(storeUsers(tempUsers));
        } else {
          setUsers([]);
        }
      })
      .catch(e => {
        console.log("e", e);
        setSpMode(false);
      });
  };

  const setSpMode = (mode: boolean) => {
    dispatch(changeSpinners(mode));
  };

  const usersUpdate = () => {
    serviceMode = true;
    getAllUserAPI();
  };

  const changeUser = (index: number, event: any) => {
    if (users !== undefined) {
      users[index].firstName = event.target.value;
      setUsers([...users]);
    }
  };

  const loginUser = () => {
    setDisplayUsers(!displayUsers);
  };

  const showBtn = () => {
    return (
      <div className="d-flex justify-content-end">
        <button className="ms-2 btn btn-outline-dark bg-gradient shadow rounded-circle bi bi-eye-slash"
                onClick={loginUser}></button>
        <button className="btn btn-outline-dark bg-gradient shadow rounded-circle bi bi bi-arrow-clockwise"
                disabled={!displayUsers} onClick={usersUpdate}></button>
      </div>
    );
  };

  const renderUsers = () => {
    return users.map((user, index) => {
      return (
        <ShowUser key={index} index={index} user={user} change={(event: any) => {
          changeUser(index, event);
        }} />
      );
    });
  };

  return (
    <Wrapper className="container-xxl card">
      <div className="card-header bg-light bg-gradient opacity-75 mt-1 d-flex">
        <div className="flex-grow-1">
          <b className="text-center d-inline">لیست کاربران</b>
        </div>
        {showBtn()}
      </div>
      <div className="card-body">
        <div className="card-body row border bg-light bg-gradient">
          <div className="col-12">
            <div className="row container container-sm container-md container-lg container-xl border m-1">
              {displayUsers ? renderUsers() : <span>لیست کابران فعال نمی باشد</span>}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Wrapper>
  );
};

export default Users;
