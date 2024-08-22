import React, { useContext, useEffect } from "react";
import styles from "./DetailsCard.module.css";
import { useState } from "react";
import {
    deleteComment,
    deletePost,
    dislikePost,
    likePost,
    postComment,
} from "../../services/postService";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import AuthContext from "../../contexts/AuthContext";
import DeleteModal from "../DeleteModal/DeleteModal";
import { formatDate } from "../../utils/formatDate";
import { useGetOnePost } from "../../hooks/usePost";

function DetailsCard() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [newComment, setNewComment] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { email, userId, isAuth } = useContext(AuthContext);
    const {
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
    } = useGetOnePost(postId);

    const changeHandler = (e) => {
        setNewComment(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (newComment === "") {
            return;
        }
        const result = await postComment(postId, newComment, email);
        setCommentsHandler(result.comments);
        setNewComment("");
    };

    const onCommentDelete = async (commentId) => {
        const result = await deleteComment(postId, commentId);
        setCommentsDeleteHandler(commentId);
    };

    const onPostDelete = async () => {
        const deletedPost = await deletePost(postId);
        navigate("/dashboard");
    };

    const onPostLike = async () => {
        const result = await likePost(postId, userId);
        setLikeCountHandler();
        setLikesHandler(userId);
        setPostHandler(result);
    };

    const onPostDislike = async () => {
        const result = await dislikePost(postId, userId);
        setDislikeCountHandler();
        setDislikeHandler(userId);
        setPostHandler(result);
    };

    const isAuthor = email === post.author;
    const isLiked = likes.includes(userId);

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
                                    Posted on {formatDate(post.createdAt)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["post-content"]}>
                        <p>{post.content}</p>
                        <img src={post.image} alt="Post Image" />
                    </div>
                    <div className={styles["post-footer"]}>
                        <div className={styles["post-likes"]}>
                            <p>Likes: {likeCount}</p>
                            <p>Comments: {comments.length}</p>
                        </div>

                        {isAuth && (
                            <div className={styles["post-buttons"]}>
                                {isLiked ? (
                                    <button
                                        className={styles["like-btn"]}
                                        onClick={onPostDislike}
                                    >
                                        <i className="fas fa-thumbs-down" />{" "}
                                        Dislike
                                    </button>
                                ) : (
                                    <button
                                        className={styles["like-btn"]}
                                        onClick={onPostLike}
                                    >
                                        <i className="fas fa-thumbs-up" /> Like
                                    </button>
                                )}

                                {isAuthor && (
                                    <>
                                        <Link
                                            className={styles["edit-btn"]}
                                            to={`/editPost/${postId}`}
                                        >
                                            <i className="fas fa-edit" /> Edit
                                        </Link>
                                        <button
                                            className={styles["delete-btn"]}
                                            onClick={() =>
                                                setShowDeleteModal(true)
                                            }
                                        >
                                            <i className="fas fa-trash" />{" "}
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles["right-section"]}>
                    <div className={styles["comments-section"]}>
                        <h4>Comments</h4>
                        {comments.length === 0 && <p>No comments yet...</p>}
                        {comments.map((comment) => (
                            <Comments
                                key={comment._id}
                                commentId={comment._id}
                                author={comment.author}
                                comment={comment.content}
                                isAuthor={isAuthor}
                                onDelete={onCommentDelete}
                            />
                        ))}
                        {isAuth && (
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
                        )}
                    </div>
                </div>
            </div>
            {showDeleteModal && (
                <DeleteModal
                    onCancel={() => setShowDeleteModal(false)}
                    onConfirm={onPostDelete}
                />
            )}
        </div>
    );
}

export default DetailsCard;
