
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
