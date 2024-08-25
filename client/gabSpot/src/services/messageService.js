import requester from "./api";

export const sendMessage = async (formData) => {
    const data = await requester("messages/send", "POST", formData);
    return data;
};
