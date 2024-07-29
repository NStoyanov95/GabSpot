import styles from "./Comments.module.css";
function Comments({ commentId, comment, author, onDelete, isAuthor }) {
    return (
        <div className={styles.comment}>
            <div className={styles["comment-content"]}>
                <p className={styles["comment-text"]}>
                    <span className={styles["comment-author"]}>{author}:</span>
                    {comment}
                </p>
                {isAuthor && (
                    <button
                        className={styles["delete-btn"]}
                        onClick={() => onDelete(commentId)}
                    >
                        <i className="fas fa-trash" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Comments;
