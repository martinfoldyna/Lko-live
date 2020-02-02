import {User} from "./users";

export interface Image {
  filename: string;
  doc_id: string;
  base64: string;
  filesize: number;
  createdBy: User;
  createdAt: Date;
}
