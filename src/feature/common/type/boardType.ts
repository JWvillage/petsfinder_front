export interface Qna_Board {
  idx : string,
  title : string,
  content : string,
  photo? : string[],
  registerDate : string,
  status : string,
  open: boolean,
  member_idx : string,
}

export interface Notice_Board {
  idx : string,
  title : string,
  content : string,
  registerDate : string
}

export interface Faq_Board {
  idx : string,
  question : string,
  answer : string
}

