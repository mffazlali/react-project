import { userInitialState } from "../states/user-state";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetch_all, fetch_by_id, insert, delete_by_id } from "../actions/user-action";
import { UserState } from "../states/user-state";
import { UserService } from "../../services";
import { UserModel } from "../../models";
import { HttpResult } from "../../models/httpResult";

export const saveUsers = (state: UserState, action: PayloadAction<any>) => {
  state.users = action.payload;
};

export const fetchAll = createAsyncThunk(
  fetch_all,
  async (thunkAPI) => {
    const userService = new UserService();
    const response = await userService.getAll();
    const httpResult: HttpResult<UserModel[]> = {
      responseCode: response.status,
      responseMessage: "",
      result: response.data
    };
    return Promise.resolve(httpResult);
  }
);

export const fetchById = createAsyncThunk(
  fetch_by_id,
  async (id: number, thunkAPI) => {
    const userService = new UserService();
    const response = await userService.getById(id);
    const result = response.data.length > 0 ? response.data[0] : null;
    const httpResult: HttpResult<UserModel> = { responseCode: response.status, responseMessage: "", result };
    return Promise.resolve(httpResult);
  }
);

export const add = createAsyncThunk(
  insert,
  async (userData: UserModel, thunkAPI) => {
    const userService = new UserService();
    const response = await userService.add(userData);
    const httpResult: HttpResult<UserModel> = {
      responseCode: response.status,
      responseMessage: "",
      result: response.data
    };
    return Promise.resolve(httpResult);
  }
);

export const deleteById = createAsyncThunk(
  delete_by_id,
  async (id: number, thunkAPI) => {
    const userService = new UserService();
    const response = await userService.delete(id);
    const httpResult: HttpResult<UserModel> = {
      responseCode: response.status,
      responseMessage: "",
      result: response.data
    };
    return Promise.resolve(httpResult);
  }
);

const userReducer = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    storeUsers: saveUsers
  },
  extraReducers(builder) {
    builder.addCase(fetchAll.fulfilled, (state: UserState, action) => {
      state.users = action.payload.result;
      return state;
    });
    builder.addCase(fetchAll.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchById.fulfilled, (state: UserState, action) => {
      state.status = "succeeded";
      state.user = action.payload.result;
      return state;
    });
    builder.addCase(fetchAll.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message === undefined ? "" : action.error.message;
    });
    builder.addCase(add.fulfilled, (state: UserState, action) => {
      state.users.push(action.payload.result);
      return state;
    });
    builder.addCase(deleteById.fulfilled, (state: UserState, action) => {
      // states.users=states.users.filter(user=>{
      // })
      return state;
    });
  }
});

export const selectAllUser = (state: any) => state.userData;

export const { storeUsers } = userReducer.actions;

export default userReducer.reducer;
