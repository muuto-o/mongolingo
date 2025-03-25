import { LoginRequest, LoginResponse } from "@/constants/types";
import api from "@/lib/api";

export async function login(body: LoginRequest) {
  const { data } = await api.post<LoginResponse>('/api/users/login', body);
  return data;
}