import Product from "../model/Product";
import { ProductType } from "../util/types";

export async function getProduct(_id: string): Promise<any> {
  const product = Product.findOne({ _id }).limit(1);
  return product;
}

export async function getAllProduct(): Promise<any> {
  const product = Product.find({}).limit(10);
  return product;
}

export async function updateProduct(
  id: string,
  updateProductInput: ProductType
): Promise<any> {
  const product = Product.findByIdAndUpdate(id, updateProductInput);
  return product;
}

export async function deleteProduct(_id: string): Promise<any> {
  return await Product.deleteOne({ _id });
}

export async function createProduct(
  createProductInput: ProductType
): Promise<any> {
  const product = new Product(createProductInput);
  return await product.save();
}
