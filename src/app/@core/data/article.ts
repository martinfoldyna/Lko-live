import {User} from "./users";

export interface Article {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
  createdBy: User;
}
