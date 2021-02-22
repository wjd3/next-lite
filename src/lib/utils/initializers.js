import { createClient } from "@supabase/supabase-js";
import { withIronSession } from "next-iron-session";

const supabaseUrl = {
  /* process.env.SUPABASE_URL */
};
const supabaseKey = {
  /* process.env.SUPABASE_KEY */
};

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

export const withSession = (handler) => {
  return withIronSession(handler, {
    password: {
      /* process.env.COOKIE_KEY */
    },
    cookieName: "default_cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      // cookie will persist for at most 1 day before the user has to log in again
      maxAge: 86400,
    },
  });
};
