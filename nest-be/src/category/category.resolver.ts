import { Query, Mutation, Resolver, Args, ObjectType } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from 'src/category/category.schema';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => [Category], { name: 'getAllCategories' })
  async getCategory(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }

  //   @Mutation(() => Category, { name: 'createCategory' })
  //   async createCategory(
  //     @Args('name') name: string,
  //     @Args('image') image: string,
  //   ): Promise<Category> {
  //     return this.categoryService.createCategory(name, image);
  //   }
}
