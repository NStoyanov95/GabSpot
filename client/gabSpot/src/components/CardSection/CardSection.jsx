import Card from "../Card/Card";
import "./CardSection.css";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postService";
function CardSection() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const posts = await getAllPosts();
            setPosts(posts);
            console.log(posts);
        })();
    }, []);

    return (
        <div className="card-section">
            <div className="card-container">
                {posts.map((post) => (
                    <Card key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}
export default CardSection;
