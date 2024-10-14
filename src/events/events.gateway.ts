import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageService } from 'src/message/message.service';
import { Message } from 'src/message/entity/message.entity';

@WebSocketGateway({ namespace: 'events' })
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messageService: MessageService) {}

  
  @SubscribeMessage('message')
  async handleMessage(client: any, payload: { message: string, authorId: string, conversationId: string }) {
    const newMessage = await this.messageService.createMessage(payload.message, payload.authorId, payload.conversationId);
    this.server.emit('newMessage', newMessage); 
  }

 
  sendMessage(message: Message) {
    this.server.emit('newMessage', message);
  }
}
