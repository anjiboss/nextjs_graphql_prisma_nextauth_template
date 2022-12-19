import "next-auth";

declare module "next-auth/client" {
  interface Session {
    expires: string;
    user: {
      email: string;
    };
  }
}
