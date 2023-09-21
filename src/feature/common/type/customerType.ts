export interface Member {
  idx: string,
  id: string,
  password: string,
  type?: string,
  name: string,
  gender: Gender,
  email: string,
  address: string,
  phoneNumber: string,
  birthday: string,
  photo?: string[]
}

export interface Gender {
  fullName: string,
  type: number
}