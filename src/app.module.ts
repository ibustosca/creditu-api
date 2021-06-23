import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PlayerModule, ConfigModule.forRoot({ envFilePath: '.database.env' }), MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_DB}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
