import React, { useEffect } from "react";
import AuthContext from "../../../common/context-api/auth-context";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../common/store/store";
import { changeSpinners } from "../../../common/store/reducers/spinner-reducer";
import ComponentSpinners from "../../ui/spinners/componentSpinners/component.spinners";
import Wrapper from "../../hoc/wrapper/wrapper";

const Home = React.lazy(() => import("../../usecases/home/home"));
const Users = React.lazy(() => import("../../usecases/users/users"));
const FullUser = React.lazy(() => import("../../usecases/users/full-user/full-user"));
const NewUser = React.lazy(() => import("../../usecases/users/new-user/new-user"));
const NotFound = React.lazy(() => import("../../usecases/not-found/not-found"));

function Article() {
  const spinnersMode = useSelector((state: RootState) => state.spinner.stateMode);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("start article component");
    return () => {
      console.log("stop article component");
    };
  });

  const setSpMode = (mode: boolean): boolean => {
    dispatch(changeSpinners(mode));
    return mode;
  };

  const renderRoutes = () => {
    const result =
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<ComponentSpinners />}>
            <Home/>
          </React.Suspense>
        } />
        <Route path="/users" element={
          <React.Suspense fallback={<ComponentSpinners />}>
              <div>
                <div className="d-flex pt-1">
                  <Users />
                </div>
              </div>
          </React.Suspense>
        }>
          <Route path="/users/:id" element={
            <React.Suspense fallback={<ComponentSpinners />}>
              <FullUser />
            </React.Suspense>
          } />
        </Route>
        <Route path="/new-user" element={
          <React.Suspense fallback={<ComponentSpinners />}>
            <div className="pt-2">
              <NewUser />
            </div>
          </React.Suspense>
        } />
        <Route path="*" element={
          <React.Suspense fallback={<ComponentSpinners />}>
            <div className="pt-2">
              <NotFound />
            </div>
          </React.Suspense>
        } />
      </Routes>;
    return result;
  };

  return (
    <Wrapper>
      <article className="" style={{ direction: "rtl", minHeight: "500px" }}>
        <AuthContext.Consumer>
          {(auth) => auth ?
            renderRoutes() : <Home />}
        </AuthContext.Consumer>
      </article>
    </Wrapper>
  );
}

export default Article;
