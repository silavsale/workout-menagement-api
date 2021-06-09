import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './db/users/users.module';
import { ExercisesModule } from './db/exercises/exercises.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/workout-app'), UsersModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
