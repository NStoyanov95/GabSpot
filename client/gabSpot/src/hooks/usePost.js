import { useEffect, useState } from "react";
import { getAllPosts } from "../services/postService";

const useGetAllPosts = () => {
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

export default useGetAllPosts;
