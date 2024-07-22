import requester from "./api";

export const register = async (formData) => {
    const data = await requester("users/register", "POST", formData);
    return data;
};

export const login = async (formData) => {
    const data = await requester("users/login", "POST", formData);
    return data;
};
