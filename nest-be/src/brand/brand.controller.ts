import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand, UpdateBrandInput } from './brand.schema';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('add')
  createBrand(@Body() createBrandInput: Brand) {
    try {
      return this.brandService.createBrand(createBrandInput);
    } catch (error) {
      return error.message;
    }
  }

  @Get('all')
  getAllBrands() {
    try {
      return this.brandService.getBrands();
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  getBrand(@Param('id') _id: string) {
    try {
      return this.brandService.getBrandById(_id);
    } catch (error) {
      return error.message;
    }
  }

  @Patch(':id')
  updateBrand(
    @Param('id') _id: string,
    @Body() updateBrandInput: UpdateBrandInput,
  ) {
    try {
      return this.brandService.updateBrand(_id, updateBrandInput);
    } catch (error) {
      return error.message;
    }
  }

  @Delete(':id')
  deleteBrand(@Param('id') _id: string) {
    try {
      return this.brandService.removeBrand(_id);
    } catch (error) {
      return error.message;
    }
  }
}
