import requester from "./api";

export const getAllPosts = async () => {
    const data = await requester("posts/feed");
    return data;
};

export const createPost = async (formData) => {
    const data = await requester("posts/create", "POST", formData);
    return data;
};

export const getSinglePost = async (postId) => {
    const data = await requester(`posts/details/${postId}`);
    return data;
};

export const postComment = async (postId, comment) => {
    const data = await requester(`posts/comment/${postId}`, "POST", {
        comment,
    });
    return data;
};

export const deletePost = async (postId) => {
    const data = await requester(`posts/delete/${postId}`, "DELETE");
    return data;
};
