
export type User = {
  id:string;
  username: string;
  email: string;
  password?: string;
  points: number;
  experience: number;
}

export type LoginRequest = {
    email : string;
    password: string;
}

export type LoginResponse = {
    id : string;
    username : string;
    email : string;
    password?: string;
    points : number;
    experience: number;
}

export type RegisterRequest = {
    username : string;
    email : string;
    password : string;
    repeat_password : string;
}

export type RegisterResponse = {
    message : string;
}

export type EditProfileRequest = {
    username: string;
    email : string;
    password: string;
}

export type EditProfileResponse ={
    username : string;
    email : string;
    password?: string;
    points : number;
}

export type AddPoinstRequest = {
    email : string;
    username: string;
    points: number;
    experience: number;
}

export type AddPoinstResponse = User

export type GetMeRequest = {
    id : string
}

export type GetMeResponse = User