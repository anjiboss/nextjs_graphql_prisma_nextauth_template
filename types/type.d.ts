import "next-auth";

declare module "next-auth/client" {
  interface Session {
    expires: string;
    user: {
      email: string;
    };
  }
}

export interface GQContext extends BaseContext {
  hello: string;
}
