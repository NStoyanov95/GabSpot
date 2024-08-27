import requester from "./api";

export const sendMessage = async (formData) => {
    const data = await requester("messages/send", "POST", formData);
    return data;
};

export const getMessagesForUser = async (userId) => {
    const data = await requester(`messages/${userId}`, "GET");
    return data;
};
