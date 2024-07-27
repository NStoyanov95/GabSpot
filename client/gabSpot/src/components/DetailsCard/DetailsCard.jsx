import React, { useContext, useEffect } from "react";
import styles from "./DetailsCard.module.css";
import { useState } from "react";
import {
    deletePost,
    getSinglePost,
    postComment,
} from "../../services/postService";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import AuthContext from "../../contexts/AuthContext";
function DetailsCard() {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { email } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const post = await getSinglePost(postId);
            setPost(post);
            setComments(post.comments);
        })();
    }, [postId]);

    const changeHandler = (e) => {
        setNewComment(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (newComment === "") {
            return;
        }
        const result = await postComment(postId, newComment);
        setComments(result.comments);
        setComments((comments) => [...comments, newComment]);
        setNewComment("");
    };

    const onPostDelete = async () => {
        const deletedPost = await deletePost(postId);
        navigate("/dashboard");
    };

    const isAuthor = email === post.author;
    console.log(isAuthor);
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
                            {isAuthor && (
                                <>
                                    <button className={styles["edit-btn"]}>
                                        <i className="fas fa-edit" /> Edit
                                    </button>
                                    <button
                                        className={styles["delete-btn"]}
                                        onClick={onPostDelete}
                                    >
                                        <i className="fas fa-trash" /> Delete
                                    </button>
                                </>
                            )}
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
