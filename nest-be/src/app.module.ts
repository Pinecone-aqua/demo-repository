import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://orgilshdeee:Blacklist12345@cluster0.rdjpop9.mongodb.net/demo-repositary',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
