"use server";

import { cookies } from "next/headers";

export async function addCookie() {
  const cookieStore = cookies();

  const cookie = cookieStore.get("test-cookie");
  console.debug(cookie);

  cookieStore.set("test-cookie", "test-value", {
    sameSite: "strict",
    httpOnly: true,
  });

  return;
}
