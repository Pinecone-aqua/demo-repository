import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category, UpdateCategoryInput } from './category.schema';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('add')
  createCategory(@Body() createCategoryInput: Category) {
    try {
      return this.categoryService.createCategory(createCategoryInput);
    } catch (error) {
      return error.message;
    }
  }

  @Get('all')
  getAllCategories() {
    try {
      return this.categoryService.getCategories();
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  getCategory(@Param('id') _id: string) {
    try {
      return this.categoryService.getCategoryById(_id);
    } catch (error) {
      return error.message;
    }
  }

  @Patch(':id')
  updateCategory(
    @Param('id') _id: string,
    @Body() updateCategoryInput: UpdateCategoryInput,
  ) {
    try {
      return this.categoryService.updateCategory(_id, updateCategoryInput);
    } catch (error) {
      return error.message;
    }
  }

  @Delete(':id')
  deleteCategory(@Param('id') _id: string) {
    try {
      return this.categoryService.removeCategory(_id);
    } catch (error) {
      return error.message;
    }
  }
}
