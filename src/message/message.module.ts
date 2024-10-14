import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { Message } from './entity/message.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    providers: [MessageService],
    controllers: [MessageController],
    exports: [MessageService], // Export MessageService so other modules can use it
  })
  export class MessageModule {}
  
