import styles from "./not-found.module.scss";
import Wrapper from "../../hoc/wrapper/wrapper";

function NotFound() {

  return (
    <Wrapper className="container-xxl card">
      <div className="card-header bg-info mt-1">
        <b>خطای آدرس نادرست</b>
      </div>
      <div className="card-body">
        <h5>صفحه مورد نظر یافت نشد</h5>
      </div>
    </Wrapper>
  );
}

export default NotFound;
