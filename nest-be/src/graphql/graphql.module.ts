import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.graphql'),
      driver: 'graphql-extensions',
    }),
  ],
  providers: [CategoryResolver],
})
export class GraphqlModule {}
