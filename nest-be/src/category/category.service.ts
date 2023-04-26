import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, UpdateCategoryInput } from './category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async getCategories() {
    return await this.categoryModel.find({});
  }

  async createCategory(category: Category) {
    const newCategory = new this.categoryModel(category);
    const result = await newCategory.save();
    return result;
  }

  async getCategoryById(_id: string) {
    return await this.categoryModel.findOne({ _id });
  }

  async updateCategory(_id: string, category: UpdateCategoryInput) {
    return await this.categoryModel.findOneAndUpdate({ _id }, category);
  }

  async removeCategory(_id: string) {
    return await this.categoryModel.deleteOne({ _id });
  }
}
