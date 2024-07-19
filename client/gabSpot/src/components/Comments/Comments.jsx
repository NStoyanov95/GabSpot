import styles from "./Comments.module.css";
function Comments({ comment }) {
    return (
        <div className={styles.comment}>
            <div className={styles["comment-content"]}>
                <p className={styles["comment-text"]}>{comment}</p>
                <button className={styles["delete-btn"]}>
                    <i className="fas fa-trash" />
                </button>
            </div>
        </div>
    );
}

export default Comments;
