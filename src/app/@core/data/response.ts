import {User} from "./users";

export interface DataResponse {
  data: any;
  toaster?: {
    message: string,
    title: string,
    status: string
  }
}

export interface UserResponse {
  data: any;
  toaster?: {
    message: string,
    title: string,
    status: string
  };
  user?: User;
}
