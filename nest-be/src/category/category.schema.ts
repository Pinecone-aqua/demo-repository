import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Category {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;
}

export class UpdateCategoryInput extends Category {
  _id: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
