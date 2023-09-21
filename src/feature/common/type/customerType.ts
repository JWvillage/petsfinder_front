import {Gender, Photo} from "./commonType";

export interface Member {
  id: string,
  password: string,
  type?: string,
  name: string,
  gender: Gender,
  email: string,
  address: string,
  phoneNumber: string,
  birthday: string,
  photo?: Photo[],
  pet? : Pet
}

export interface Pet {
  name : string,
  age : number,
  neut? : boolean,
  gender : Gender,
  kind : string,
  character : string,
  species? : string,
  photo? : Photo[],
  member: Member
}