import styles from "./modal.module.scss";
import Wrapper from "../../hoc/wrapper/wrapper";
import { useAppDispatch, useAppSelector } from "../../../common/store/hooks";
import { closeModal } from "../../../common/store/reducers/modal-reducer";
import BackDrop from "../back-drop/back-drop";
import { useEffect, useState } from "react";


const Modal = () => {

  const [classes, setClasses] = useState<string[]>([]);
  const [classesP, setClassesP] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const selector = useAppSelector(state => state.modal);

  useEffect(() => {
    setClasses([styles["modal"], styles["close"]]);
    setClassesP([styles["close"],styles['modalParent']]);
    if (selector.stateMode) {
      setClasses([styles["modal"], styles["open"]]);
      setClassesP([styles["open"]]);
    }
  }, [selector.stateMode]);


  const close = () => {
    dispatch(closeModal());
  };

  return (
    <Wrapper>
      <BackDrop open={selector.stateMode} close={close} backDropClassMode={false} />
      <div
           className={["position-absolute w-100 h-100 d-flex justify-content-center bg-transparent", ...classesP].join(" ")}>
        <div style={{ zIndex: "500" }}
             className={["card position-absolute top-50 start-50 translate-middle w-25 h-25", ...classes].join(" ")}>
          <div className="card-header d-flex">
            <div className="flex-grow-1">
              <h5 className="">{selector.title}</h5>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-link bg-gradient bi bi-x-lg"
                      onClick={() => dispatch(closeModal())}></button>
            </div>
          </div>
          <div className="card-body">
            <p>{selector.message}</p>
          </div>
        </div>
      </div>
    </Wrapper>

  );
};

export default Modal;
