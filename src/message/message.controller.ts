import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './entity/message.entity';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async createMessage(
    @Body('message') message: string,
    @Body('authorId') authorId: string,
    @Body('conversationId') conversationId: string,
  ): Promise<Message> {
    return this.messageService.createMessage(message, authorId, conversationId);
  }

  @Get(':conversationId')
  async getMessages(@Param('conversationId') conversationId: string): Promise<Message[]> {
    return this.messageService.getMessagesByConversation(conversationId);
  }
}
