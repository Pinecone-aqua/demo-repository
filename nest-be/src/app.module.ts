import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { GoogleLoginModule } from './google-login/google-login.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://orgilshdeee:Blacklist12345@cluster0.rdjpop9.mongodb.net/demo-repositary',
    ),
    ConfigModule.forRoot(),
    UserModule,
    BrandModule,
    CategoryModule,
    ProductModule,
    GoogleLoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
