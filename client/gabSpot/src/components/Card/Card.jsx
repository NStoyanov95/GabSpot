import { Link } from "react-router-dom";
import "./Card.css";
function Card({ post }) {
    return (
        <Link to={`/details/${post._id}`}>
            <div className="card">
                <header className="card-header">
                    <div className="author-img">
                        <img src={post.authorImage} />
                    </div>
                    <div className="author-name">
                        <p>{post.author}</p>
                    </div>
                </header>
                <div className="description">
                    <p>{post.content}</p>
                </div>
                <div className="content-image">
                    <img src={post.image} />
                </div>
                <div className="likes-comments-container">
                    <p>Likes: {post.likes.length}</p>
                    <p>Comments: {post.comments.length}</p>
                </div>
                <footer className="card-footer">
                    <button>
                        <i className="fas fa-heart"></i>
                    </button>
                    <button>
                        <i className="fas fa-comment"></i>
                    </button>
                </footer>
            </div>
        </Link>
    );
}
export default Card;
