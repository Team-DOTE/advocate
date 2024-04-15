import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    accept: string | null;
    name: string | null;
    profile: string | null;
    role: string | null;
    school: string | null;
    telephone: string | null;
    userid: string | null;
    _id: string | null;
  }

  interface Session extends DefaultSession {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      user?: User;
    };
    expires: ISODateString;
  }
}
