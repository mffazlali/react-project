import styles from "./orders.module.scss";
import { useState } from "react";
import { OrderService } from "../../../common/services";
import Order from "./order/order";
import Wrapper from "../../hoc/wrapper/wrapper";

/* eslint-disable-next-line */
export interface OrdersProps {
}

export function Orders() {

  const orderService = new OrderService();
  const [orders, setOrders] = useState(orderService.getAll);

  const renderOrders = () => {
    if (orders.length > 0) {
      return orders.map((order, index) => {
        return (
          <Order key={index} order={order}></Order>
        );
      });
    } else {
      return (
        <div className="col-12">
          <span>لیست سفارشات کاربر یافت نشد</span>
        </div>
      );

    }
  };

  return (
    <Wrapper className="d-flex pt-5">
      {renderOrders()}
    </Wrapper>
  );
}

export default Orders;
