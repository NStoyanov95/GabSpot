import Message from "../models/Message";
import { MessageData, MessageType } from "../types/Message";

const create = (messageData: MessageData): Promise<MessageType> =>
    Message.create(messageData);

const getMessagesForUser = async (
    userId: string
): Promise<MessageType[] | null> => {
    return await Message.find({ to: userId }).populate(
        "from",
        "username email"
    );
};

export default { create, getMessagesForUser };
