import { Link } from "react-router-dom";
import styles from "./Card.module.css";
function Card({ post }) {
    return (
        <div className={styles["card"]}>
            <header className={styles["card-header"]}>
                <div className={styles["author-img"]}>
                    <img src={post.authorImage} />
                </div>
                <div className={styles["author-name"]}>
                    <p>{post.author}</p>
                </div>
            </header>
            <div className={styles["description"]}>
                <p>{post.content}</p>
            </div>
            <div className={styles["content-image"]}>
                <Link to={`/details/${post._id}`}>
                    <img src={post.image} />
                </Link>
            </div>
            <div className={styles["likes-comments-container"]}>
                <p>Likes: {post.likes.length}</p>
                <p>Comments: {post.comments.length}</p>
            </div>
        </div>
    );
}
export default Card;
