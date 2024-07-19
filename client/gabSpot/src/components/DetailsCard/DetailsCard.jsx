import React, { useEffect } from "react";
import styles from "./DetailsCard.module.css";
import { useState } from "react";
import { getSinglePost, postComment } from "../../services/postService";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
function DetailsCard() {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        (async () => {
            const post = await getSinglePost(postId);
            setPost(post);
            setComments(post.comments);
        })();
    }, []);

    const changeHandler = (e) => {
        setNewComment(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        (async () => {
            const result = await postComment(postId, newComment);
            setComments(result.comments);
            setComments((comments) => [...comments, newComment]);
            setNewComment("");
        })();
    };

    return (
        <div className={styles["post-container"]}>
            <div className={styles["post-card"]}>
                <div className={styles["left-section"]}>
                    <div className={styles["post-header"]}>
                        <div className={styles["post-header-info"]}>
                            <img
                                src={post.authorImage}
                                alt="User Avatar"
                                className={styles.avatar}
                            />
                            <div className={styles["user-info"]}>
                                <h4 className={styles.username}>
                                    {post.author}
                                </h4>
                                <p className={styles["post-date"]}>
                                    Posted on {post.createdAt}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["post-content"]}>
                        <p>{post.content}</p>
                        <img src={post.image} alt="Post Image" />
                        <div className={styles["post-buttons"]}>
                            <button className={styles["like-btn"]}>
                                <i className="fas fa-thumbs-up" /> Like
                            </button>
                            <button className={styles["edit-btn"]}>
                                <i className="fas fa-edit" /> Edit
                            </button>
                            <button className={styles["delete-btn"]}>
                                <i className="fas fa-trash" /> Delete
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles["right-section"]}>
                    <div className={styles["comments-section"]}>
                        <h4>Comments</h4>
                        {comments.map((comment) => (
                            <Comments key={comment} comment={comment} />
                        ))}
                        <form className={styles["comment-form"]}>
                            <textarea
                                placeholder="Add a comment..."
                                onChange={changeHandler}
                                value={newComment}
                            />
                            <button type="submit" onClick={onSubmit}>
                                Post Comment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsCard;
