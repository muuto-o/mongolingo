
export type User = {
  username: string;
  email: string;
  password?: string;
  points: number;
}

export type LoginRequest = {
    email : string;
    password: string;
}

export type LoginResponse = {
    username : string;
    email : string;
    password?: string;
    points : number;
}