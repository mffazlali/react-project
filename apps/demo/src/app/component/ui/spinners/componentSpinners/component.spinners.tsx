import styles from "./component.spinners.module.scss";

//
function ComponentSpinners() {

  return (
    <div style={{ zIndex: "9000" }}
         className="position-fixed w-100 min-vh-100 bg-dark bg-opacity-75 bg-gradient">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className={styles["loader"]}>Loading...</div>
      </div>
    </div>
  );
}

export default ComponentSpinners;
