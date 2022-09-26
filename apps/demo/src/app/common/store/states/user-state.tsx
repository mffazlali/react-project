import { UserModel } from "../../models/user-model";

export interface UserState {
  users: UserModel[];
  user: UserModel | null;
  status: string;
  error:string;
}

export const userInitialState: UserState = {
  users: [],
  user: null,
  status: '',
  error: '',
};
