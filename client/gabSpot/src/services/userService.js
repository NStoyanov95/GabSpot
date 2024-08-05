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

export const verifyUser = async () => {
    const data = await requester(`users/verifyUser`);
    return data;
};

export const logout = async () => {
    const data = await requester("users/logout");
};

export const getUserWithPosts = async (userId) => {
    const data = await requester(`users/withPosts/${userId}`);
    return data;
};
