import Wrapper from "../wrapper/wrapper";
import Header from "../../layouts/header/header";
import Article from "../../layouts/article/article";
import Footer from "../../layouts/footer/footer";
import React, { useState } from "react";
import AuthContext from "../../../common/context-api/auth-context";
import ServiceSpinners from "../../ui/spinners/serviceSpinners/service.spinners";
import Modal from "../../ui/modal/modal";
import Toolbar from "../../layouts/navigation/toolbar/toolbar";
import SlideDrawer from "../../layouts/slide-drawer/slide-drawer";

const Layout = () => {

  const [showModal, setShowModal] = useState(true);
  const [auth, setAuth] = useState(true);
  const login = () => {
    setAuth(!auth);
  };

  return (
    <Wrapper style={{ direction: "rtl", height: "100%" }}>
      <Modal />
      <ServiceSpinners />
      <AuthContext.Provider value={auth}>
        <Header auth={auth} login={login} />
        <Toolbar setShow={() => setShowModal(true)} />
        <SlideDrawer open={showModal} close={() => setShowModal(false)}></SlideDrawer>
        <Article />
        <Footer />
      </AuthContext.Provider>
    </Wrapper>

  );
};

export default Layout;
