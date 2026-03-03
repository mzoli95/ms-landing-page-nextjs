import { cookies } from "next/headers";
import { themeCookieName, type Theme } from "@/components/lib/theme.shared";

export async function getThemeFromCookies(): Promise<Theme> {
  const cookieStore = await cookies();
  const value = cookieStore.get(themeCookieName)?.value;
  return value === "dark" ? "dark" : "light";
}
