import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, UpdateProductInput } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('add')
  createProduct(@Body() createProductInput: Product) {
    try {
      return this.productService.createProduct(createProductInput);
    } catch (error) {
      return error.message;
    }
  }

  @Get('all')
  getAllProduct() {
    try {
      return this.productService.getProducts();
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  getProduct(@Param('id') _id: string) {
    try {
      return this.productService.getProductById(_id);
    } catch (error) {
      return error.message;
    }
  }

  @Patch(':id')
  updateProduct(
    @Param('id') _id: string,
    @Body() updateProductInput: UpdateProductInput,
  ) {
    try {
      return this.productService.updateProduct(_id, updateProductInput);
    } catch (error) {
      return error.message;
    }
  }

  @Delete(':id')
  deleteProduct(@Param('id') _id: string) {
    try {
      return this.productService.removeProduct(_id);
    } catch (error) {
      return error.message;
    }
  }
}
