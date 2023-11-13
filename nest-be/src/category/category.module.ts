import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.schema';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryResolver],
})
export class CategoryModule {}
