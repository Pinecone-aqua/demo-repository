import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, UpdateProductInput } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getProducts() {
    return await this.productModel.find({}).populate('brand category');
  }

  async createProduct(product: Product) {
    const newProduct = new this.productModel(product);
    const result = await newProduct.save();
    return result;
  }

  async getProductById(_id: string) {
    return await this.productModel.findOne({ _id });
  }

  async updateProduct(_id: string, product: UpdateProductInput) {
    return await this.productModel.findOneAndUpdate({ _id }, product);
  }

  async removeProduct(_id: string) {
    return await this.productModel.deleteOne({ _id });
  }
}
