import { Context } from "@apollo/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolver = {
  Query: {
    hello: (_parent: any, _arg: any, context: Context, info: any) => {
      return context.hello;
    },
  },
  Mutation: {
    addUser: async (_parent: any, args: any, context: Context, info: any) => {
      const { email, image, name }: { [x: string]: string } = args;
      await prisma.user.upsert({
        where: {
          email,
        },
        update: {
          image,
          name,
        },
        create: {
          email,
          name,
          image,
        },
      });
      return true;
    },
  },
};

export default resolver;
