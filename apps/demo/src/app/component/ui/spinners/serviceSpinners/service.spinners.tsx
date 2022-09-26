import styles from "./service.spinners.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../common/store/store";
import Wrapper from "../../../hoc/wrapper/wrapper";

function ServiceSpinners() {

  const spinnersMode = useSelector((state: RootState) => state.spinner.stateMode);

  return (
    spinnersMode ?
      <Wrapper>
        <div style={{ zIndex: "9000" }}
             className="position-fixed w-100 min-vh-100 bg-dark bg-opacity-75 bg-gradient">
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className={styles["loader"]}>Loading...</div>
          </div>
        </div>
      </Wrapper>
      :
      null
  );
}

export default ServiceSpinners;
