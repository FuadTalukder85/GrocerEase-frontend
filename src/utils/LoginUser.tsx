"use server";
import { LoginUserType } from "@/components/form/LoginForm";
export const loginUser = async (data: LoginUserType) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
