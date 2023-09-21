import {Member} from "./customerType";

export interface QnaBoard {
  title : string,
  content : string,
  photo? : string[],
  registerDate : string,
  status : string,
  open: boolean,
  member : Member
}

export interface NoticeBoard {
  title : string,
  content : string,
  registerDate : string
}

export interface FaqBoard {
  question : string,
  answer : string
}