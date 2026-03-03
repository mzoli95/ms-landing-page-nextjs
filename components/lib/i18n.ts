import { cookies } from "next/headers";

export type Lang = "hu" | "en";

export async function getLangFromCookies(): Promise<Lang> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("site_lang")?.value;
  return lang === "en" ? "en" : "hu";
}
