import Message from "../models/Message";
import { MessageData, MessageType } from "../types/Message";

const create = (messageData: MessageData): Promise<MessageType> =>
    Message.create(messageData);

export default { create };
