import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { MessageModule } from 'src/message/message.module'; // Import the MessageModule

@Module({
  imports: [MessageModule], // Add this import
  providers: [EventsGateway],
})
export class EventsModule {}
