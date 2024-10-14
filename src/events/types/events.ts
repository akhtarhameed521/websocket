import { Message } from "src/message/entity/message.entity"

export interface ServerToClientEvents {
    newMessage: (payload: Message) => void;
}