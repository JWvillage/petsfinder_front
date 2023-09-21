export interface Gender {
  code: string,
  type: number
}

export interface Photo {
  fullPath: string,
  name: string
}

export interface APIRequestParam {
  method? : 'POST' | 'GET' | 'PUT' | 'DELETE'
  url : string
  body? : any
  headers? : Record<string, string>
}