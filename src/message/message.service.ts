import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entity/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async createMessage(message: string, authorId: string, conversationId: string): Promise<Message> {
    const newMessage = this.messageRepository.create({
      message,
      authorId,
      conversationId,
    });
    return await this.messageRepository.save(newMessage);
  }

  async getMessagesByConversation(conversationId: string): Promise<Message[]> {
    return this.messageRepository.find({ where: { conversationId } });
  }
}
