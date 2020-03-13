import {AuthoriseUser, User} from "./users";
import {Code} from "./code";

export interface UserResponse {
  code: Code;
  user?: User;
  users?: [AuthoriseUser];
}

export interface SimpleResponse {
  code: Code;
}

export interface ResultResponse {
  code: Code;
  result: any;
}
