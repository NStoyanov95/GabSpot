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

    const setPostHandler = (post) => {
        setPost(post);
    };

    const setLikesHandler = (userId) => {
        setLikes((oldState) => [...oldState, userId]);
    };

    const setDislikeHandler = (userId) => {
        setLikes((oldLikes) => oldLikes.filter((id) => id !== userId));
    };

    const setLikeCountHandler = () => {
        setLikeCount((oldState) => oldState + 1);
    };

    const setDislikeCountHandler = () => {
        setLikeCount((oldState) => oldState - 1);
    };

    const setCommentsHandler = (comment) => {
        setComments(comment);
    };

    const setCommentsDeleteHandler = (commentId) => {
        setComments((oldState) =>
            oldState.filter((comment) => comment._id !== commentId)
        );
    };

    return {
        post,
        setPostHandler,
        likes,
        setLikesHandler,
        likeCount,
        setLikeCountHandler,
        setDislikeCountHandler,
        comments,
        setCommentsHandler,
        setCommentsDeleteHandler,
        setDislikeHandler,
    };
};
