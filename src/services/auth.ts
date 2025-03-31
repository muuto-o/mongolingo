import { AddPoinstRequest, AddPoinstResponse, EditProfileRequest, EditProfileResponse, GetMeRequest, GetMeResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "@/constants/types";
import api from "@/lib/api";

export async function login(body: LoginRequest) {
  const { data } = await api.post<LoginResponse>('/api/users/login', body);
  console.log("first:")
  console.log(data)
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

export async function addPoinst(body : AddPoinstRequest){
    const {data} = await api.put<AddPoinstResponse>("/api/users/add-points", body);
    return data;
}

export async function getMe({id}:GetMeRequest){
    const {data} = await api.get<GetMeResponse>(`/api/users/me/${id}`);
    return data;
}