import Card from "../Card/Card";
import "./CardSection.css";

import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useGetAllPosts } from "../../hooks/usePost";
function CardSection() {
    const { posts, isLoading } = useGetAllPosts();

    return (
        <div className="card-section">
            <div className="card-container">
                {isLoading ? (
                    <Loader />
                ) : posts.length === 0 ? (
                    <Link to={"/createpost"} className="no-posts">
                        No posts yet, be the first!{" "}
                    </Link>
                ) : (
                    posts.map((post) => <Card key={post._id} post={post} />)
                )}
            </div>
        </div>
    );
}
export default CardSection;
