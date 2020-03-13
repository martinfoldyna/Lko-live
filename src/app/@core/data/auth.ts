import {Code} from "./code";
import {AuthoriseUser, GoogleUser, MicrosoftUser, User} from "./users";

export interface GoogleUserResponse {
  code: Code;
  user: GoogleUser;
}

export interface MicrosoftUserResponse {
  code: Code;
  user: MicrosoftUser;
}

export interface AuthorisedUserResponse {
  code: Code;
  user?: AuthoriseUser;
  users?: [AuthoriseUser];
}
