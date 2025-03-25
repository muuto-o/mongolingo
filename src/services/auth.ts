import { EditProfileRequest, EditProfileResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "@/constants/types";
import api from "@/lib/api";

export async function login(body: LoginRequest) {
  const { data } = await api.post<LoginResponse>('/api/users/login', body);
  return data;
}

export async function editProfile(body: EditProfileRequest){
    console.log(body);
    const {data} = await api.put<EditProfileResponse>("api/users/edit-profile",body)
    return data;
}

export async function registerUser(body: RegisterRequest){
  const {data} = await api.post<RegisterResponse>("/api/users/", body);
  return data;
}