import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { Chat } from './chat/entities/chat.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AdModule } from './ad/ad.module';
import { CommentModule } from './comment/comment.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatModule,
    MongooseModule.forRoot(process.env.DB_MONGO_HOST, {
      dbName: process.env.DB_MONGO_NAME
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Chat],
      synchronize: true,
    }),
    AdModule,
    CommentModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}






