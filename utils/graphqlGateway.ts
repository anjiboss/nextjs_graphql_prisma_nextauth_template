import { stitchSchemas } from "@graphql-tools/stitch";
import { loadSchemaSync } from "@graphql-tools/load";
import path from "path";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import * as fs from "fs";
import { GraphQLSchema } from "graphql";
// import resolvers from "../modules/tmp/resolver";

const gatewaySchema = () => {
  const folders = fs.readdirSync(path.join(__dirname, "..", "..", "..", "..", "modules"));

  const subschemas: GraphQLSchema[] = [];
  folders.forEach((folder) => {
    const userSchema = loadSchemaSync(
      path.join(__dirname, "..", "..", "..", "..", "modules", folder, "schema.graphql"),
      {
        loaders: [new GraphQLFileLoader()],
      }
    );

    const resolver = require(`../modules/${folder}/resolver`);
    const userSchemaWithResolver = addResolversToSchema({
      schema: userSchema,
      resolvers: resolver.default,
    });

    subschemas.push(userSchemaWithResolver);
  });

  return stitchSchemas({
    subschemas: subschemas,
  });
};

export default gatewaySchema;
