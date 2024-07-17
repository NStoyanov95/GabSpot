import React from "react";
import styles from "./DetailsCard.module.css";

function DetailsCard() {
    return (
        <div className={styles["post-card"]}>
            <div className={styles["post-header"]}>
                <div className={styles["post-header-info"]}>
                    <img
                        src="https://via.placeholder.com/50"
                        alt="User Avatar"
                        className={styles.avatar}
                    />
                    <div className={styles["user-info"]}>
                        <h2 className={styles.username}>John Doe</h2>
                        <p className={styles["post-date"]}>
                            Posted on July 13, 2024
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles["post-content"]}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <img
                    src="https://via.placeholder.com/600x400"
                    alt="Post Image"
                />
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
            <div className={styles["comments-section"]}>
                <h3>Comments</h3>
                <div className={styles.comment}>
                    <div className={styles["comment-content"]}>
                        <p className={styles["comment-text"]}>
                            Great post! Really enjoyed reading it.
                        </p>
                        <button className={styles["delete-btn"]}>
                            <i className="fas fa-trash" /> Delete
                        </button>
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles["comment-content"]}>
                        <p className={styles["comment-text"]}>
                            Thanks for sharing this information.
                        </p>
                        <button className={styles["delete-btn"]}>
                            <i className="fas fa-trash" /> Delete
                        </button>
                    </div>
                </div>
                <form className={styles["comment-form"]}>
                    <textarea placeholder="Add a comment..." required />
                    <button type="submit">Post Comment</button>
                </form>
            </div>
        </div>
    );
}

export default DetailsCard;
