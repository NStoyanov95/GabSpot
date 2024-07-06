export const getAllPosts = async () => {
    const res = await fetch("http://localhost:3030/posts/feed");
    const data = await res.json();
    return data;
};
