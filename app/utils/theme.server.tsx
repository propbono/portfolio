import { createCookieSessionStorage } from "@remix-run/node";
import { Theme, isTheme } from "./theme-provider";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "propbono_theme",
    secure: true,
    secrets: [process.env.SESSION_SECRET as string],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : Theme.DARK;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () =>
      // no theme for you on my 100th birthday! 😂
      themeStorage.commitSession(session, { expires: new Date("2088-10-18") }),
  };
}

export { getThemeSession };
