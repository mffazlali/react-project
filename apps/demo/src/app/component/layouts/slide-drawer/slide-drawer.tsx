import styles from "./slide-drawer.module.scss";
import Wrapper from "../../hoc/wrapper/wrapper";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { closeModal } from "../../../common/store/reducers/modal-reducer";
import NavigationItems from "../navigation/navigation-items/navigation-items";
import { useEffect, useState } from "react";
import BackDrop from "../../ui/back-drop/back-drop";


const SlideDrawer = (props: { open: boolean, close: () => void }) => {

  const [classes, setClasses] = useState<string[]>([]);

  useEffect(() => {
    setClasses([styles["slideDrawer"], styles["close"]]);
    if (props.open) {
      setClasses([styles["slideDrawer"], styles["open"]]);
    }
  }, [props.open]);

  const close = () => {
    props.close();
  };


  return (
    <Wrapper>
      <BackDrop open={props.open} close={close} backDropClassMode={true}/>
      <div style={{ zIndex: "9000", width: "200px" }}
           className={["position-fixed end-0 top-0 bg-info bg-gradient h-100 justify-content-center", ...classes].join(" ")}>
        <div>
          <div className="pt-2 pb-2">
            <button style={{ marginRight: "50%" }}
                    className="btn btn-link translate-middle-x text-white bg-gradient bi bi-x-lg"
                    onClick={close}></button>
          </div>
          <div>
            <NavigationItems />
          </div>
        </div>
      </div>
    </Wrapper>

  );
};

export default SlideDrawer;
