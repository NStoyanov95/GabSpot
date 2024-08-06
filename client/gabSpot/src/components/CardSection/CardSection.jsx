import Card from "../Card/Card";
import "./CardSection.css";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postService";
import Loader from "../Loader/Loader";
function CardSection() {
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

    return (
        <div className="card-section">
            <div className="card-container">
                {isLoading ? (
                    <Loader />
                ) : (
                    posts.map((post) => <Card key={post._id} post={post} />)
                )}
            </div>
        </div>
    );
}
export default CardSection;
