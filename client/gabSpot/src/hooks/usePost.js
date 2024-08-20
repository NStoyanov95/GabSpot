import { useEffect, useState } from "react";
import { getAllPosts, getSinglePost } from "../services/postService";

export const useGetAllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const posts = await getAllPosts();
                setPosts(posts);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        })();
    }, []);

    return { posts, isLoading };
};

export const useGetOnePost = (postId) => {
    const [post, setPost] = useState({});
    const [likes, setLikes] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const post = await getSinglePost(postId);
            setPost(post);
            setComments(post.comments || []);
            setLikeCount(post.likes.length);
            setLikes(post.likes);
        })();
    }, [postId]);

    return {
        post,
        setPost,
        likes,
        setLikes,
        likeCount,
        setLikeCount,
        comments,
        setComments,
    };
};
