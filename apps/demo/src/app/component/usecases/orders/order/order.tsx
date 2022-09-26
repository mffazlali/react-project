import styles from "./order.module.scss";
import { OrderModel } from "../../../../common/models";
import Wrapper from "../../../hoc/wrapper/wrapper";

/* eslint-disable-next-line */
export interface OrderProps {
}

function Order(props: { order: OrderModel }) {
  return (
    <Wrapper className={styles["container"]}>
      <h1>Welcome to Order!</h1>
    </Wrapper>
  );
}

export default Order;
