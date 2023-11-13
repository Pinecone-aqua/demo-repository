import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppResolver } from "./app.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.graphql"),
    }),
  ],
  providers: [AppResolver],
})
export class GraphqlModule {}
