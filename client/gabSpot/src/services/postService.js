export const getAllPosts = async () => {
    const res = await fetch("http://localhost:3030/posts/feed");
    const data = await res.json();
    return data;
};

export const createPost = async (formData) => {
    const res = await fetch("http://localhost:3030/posts/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
};

export const getSinglePost = async (postId) => {
    const res = await fetch(`http://localhost:3030/posts/details/${postId}`);
    const data = await res.json();
    return data;
};
