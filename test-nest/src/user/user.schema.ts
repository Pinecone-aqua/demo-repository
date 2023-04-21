import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  birthYear: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
