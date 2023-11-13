import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from 'src/category/category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async createCategory(name: string, image: string): Promise<Category> {
    const newCategory = new this.categoryModel({ name, image });
    const result = await newCategory.save();
    return result;
  }

  async getAllCategories(): Promise<Category[] | null> {
    try {
      const categories = await this.categoryModel.find({}).exec();
      return categories;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
