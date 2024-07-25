import requester from "./api";

export const register = async (formData) => {
    const data = await requester("users/register", "POST", formData);
    return data;
};

export const login = async (formData) => {
    const data = await requester("users/login", "POST", formData);
    return data;
};

export const getCurrentUser = async (userId) => {
    if (!userId) {
        return;
    }
    const data = await requester(`users/currentUser/${userId}`);
    return data;
};
