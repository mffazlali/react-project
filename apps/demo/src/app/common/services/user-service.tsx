import axiosClient from "../interseptors/axiosClient";
import { useDispatch } from "react-redux";

export class UserService {

  // getAll2 = () => {
  //   return async function fetchTodosThunk(dispatch: any) {
  //     const response = await axiosClient.get("/users");
  //     dispatch(userLoad2(response.data));
  //   };
  // };

  getAll = () => {
    return axiosClient.get("/users");
  };

  getById = (id: number) => {
    return axiosClient.get("/users", { params: { id } });
  };

  add = (data: any) => {
    return axiosClient.post("/users/", data);
  };

  delete = (id: number) => {
    return axiosClient.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  };

}
