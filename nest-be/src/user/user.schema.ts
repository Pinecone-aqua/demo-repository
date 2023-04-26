import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ maxlength: 8, minlength: 8 })
  phoneNumber: number;

  @Prop({ default: 'CLIENT' })
  role: 'CLIENT' | 'MODERATOR' | 'ADMIN';
}

export class UpdateUserInput extends User {
  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
