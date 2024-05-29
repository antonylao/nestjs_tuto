import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
  ) { }

  async findAll(): Promise<Chat[]> {
    return await this.chatRepository.find();
  }

  async findOne(id: number): Promise<Chat | null> {
    return await this.chatRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.chatRepository.delete(id);
  }

  async create(body: any) {
    console.log("🚀 ~ ChatService ~ create ~ body:", body)
    const chat = this.chatRepository.create(body)
    await this.chatRepository.save(chat)
    return chat;

  }
}
