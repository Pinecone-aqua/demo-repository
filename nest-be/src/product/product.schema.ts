import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop({ ref: 'Brand' })
  brand: string;

  @Prop({ ref: 'Category' })
  category: string;

  @Prop()
  image: string;
}

export class UpdateProductInput extends Product {
  _id: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
