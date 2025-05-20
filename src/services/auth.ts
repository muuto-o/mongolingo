import { CompleteExerciseRequest, CompleteExerciseResponse, EditProfileRequest, EditProfileResponse, EmailCheckRequest, EmailCheckResponse, GetMeRequest, GetMeResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, ResetPasswordRequest, ResetPasswordResponse, User } from "@/constants/types";
import api from "@/lib/api";

export async function getAllUsers(){
    const { data } = await api.get<User[]>('/api/users');
    return data;
}

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

export async function CompleteExercise(body : CompleteExerciseRequest){
    const {data} = await api.put<CompleteExerciseResponse>("/api/users/add-points", body);
    return data;
}

export async function getMe({id}:GetMeRequest){
  console.log(id);
    const {data} = await api.get<GetMeResponse>(`/api/users/me/${id}`);
    return data;
}

export async function leaderboard(){
  const { data } = await api.get<User[]>('/api/users/leaderboard');
    return data;
}

export async function emailCheck(body: EmailCheckRequest) {
  const { data } = await api.post<EmailCheckResponse>('/api/users/forgot-password', body);
  return data;
}


export async function resetPassword(body : ResetPasswordRequest){
  const { data } = await api.post<ResetPasswordResponse>("/api/users/reset-password", body);
  return data;
}
