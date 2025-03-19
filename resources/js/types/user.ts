import { Method } from "@/types/method";

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  avatar: string;
}

export type UpdateProfile = {
  _method: Method;
  name: string;
  email: string;
  avatar: File | null;
}

export type UpdatePassword = {
  current_password: string,
  password:string,
  password_confirmation: string,
}

export type ResetPasswordSchema = {
  token: string,
  email: string,
  password: string,
  password_confirmation: string,
}
