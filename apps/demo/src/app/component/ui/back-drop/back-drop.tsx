import styles from "./back-drop.module.scss";
import Wrapper from "../../hoc/wrapper/wrapper";

const BackDrop = (props: { open: boolean, close: () => void, backDropClassMode:boolean }) => {

  return props.open ? <Wrapper
    style={{ zIndex: "200" }}
    className={props.backDropClassMode?["position-fixed w-100 h-100 bg-dark bg-opacity-50 bg-gradient",styles['backDrop']].join((" ")):["position-fixed top-0 w-100 h-100 bg-dark bg-opacity-50 bg-gradient"].join((" "))}
    onClick={props.close}>
  </Wrapper> : null;
};

export default BackDrop;
