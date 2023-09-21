import {Member} from "./customerType";
import {Photo} from "./commonType";

export interface Sitter {
  title : string,
  intro : string,
  address : string,
  smallFee : number,
  middleFee : number,
  bigFee : number,
  customersCount : number,
  starPoint : number,
  starPointCount : number,
  tags : SitterTag[],
  availableServices : SitterService[],
  bookInformations : BookInformation[]
  photos? : Photo[]
  member : Member,
  reviews : Review[]
}

export interface SitterTag {
  name : string,
  explain : string
}

export interface SitterService {
  name : string,
  explain : string
}

export interface BookInformation {
  sitter : Sitter,
  booker : Member,
  startDate : string,
  endDate : string,
  status : string
}

export interface Review {
  member : Member,
  content : string,
  comments : Comment[]
}

export interface Comment {
  member : Member,
  content : string
}