import { PrismaClient } from "@prisma/client";
import { Resolvers } from "../../generated/graphql";
import { GQContext } from "../../types/type";

const prisma = new PrismaClient();

const resolver: Resolvers<GQContext> = {
  Query: {
    hello: (_parent, _args, context, _info) => {
      return context.hello;
    },
  },
  Mutation: {
    addUser: async (_parent, args, _context, _info) => {
      const { email, image, name } = args;
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
