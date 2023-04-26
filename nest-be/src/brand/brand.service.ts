import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, UpdateBrandInput } from './brand.schema';
import { Model } from 'mongoose';

@Injectable()
export class BrandService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async getBrands() {
    return await this.brandModel.find({});
  }

  async createBrand(brand: Brand) {
    const newBrand = new this.brandModel(brand);
    const result = await newBrand.save();
    return result;
  }

  async getBrandById(_id: string) {
    return await this.brandModel.findOne({ _id });
  }

  async updateBrand(_id: string, brand: UpdateBrandInput) {
    return await this.brandModel.findOneAndUpdate({ _id }, brand);
  }

  async removeBrand(_id: string) {
    return await this.brandModel.deleteOne({ _id });
  }
}
