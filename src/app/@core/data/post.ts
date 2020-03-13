import {User} from "./users";
import {CompressedPhoto} from "./photo";
import {Code} from "./code";

export interface Post {
  _id?: string;
  title?: string;
  url?: string;
  thumbnail?: CompressedPhoto;
  subject?: string;
  classYear?: number;
  createdAt?: Date;
  createdBy?: User;
}

export interface MultiplePostResponse {
  code: Code;
  post: [Post];
}

export interface SinglePostResponse {
  code: Code;
  post: Post;
}
