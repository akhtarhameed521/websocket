import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/entity/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'akhtar123',
      database: 'devui',
      entities: [Message],
      synchronize: true,
    }),
    EventsModule,  // Import EventsModule
    MessageModule, // Import MessageModule
  ],
})
export class AppModule {}
