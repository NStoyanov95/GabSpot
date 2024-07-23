import { useState } from "react";
import styles from "./CreatePostForm.module.css";
import { createPost } from "../../services/postService";

function CreatePostForm() {
    const [formData, setFormData] = useState({
        image: "",
        content: "",
    });

    const changeHandler = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(formData);

        const res = await createPost(formData);

        setFormData({
            image: "",
            content: "",
        });
    };
    return (
        <>
            <div className={styles.formWrapper}>
                <div className={styles.leftSide}>
                    <h3>Share Your Moments with the World</h3>
                    <p>
                        At GabSpot, we believe in the power of connection.
                        Whether it's a thought, a photo, or a story, your posts
                        have the power to inspire and engage. Join our community
                        of storytellers and share your unique perspective with
                        friends and followers.
                    </p>
                </div>
                <div className={styles.rightSide}>
                    <h3>Create Post</h3>
                    <form className={styles.createPostForm}>
                        <div className={styles.field}>
                            <label htmlFor="imageUrl">Image URL</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="image"
                                value={formData.image}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="content">Content</label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={changeHandler}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Post"
                            className={styles.submitBtn}
                            onClick={submitHandler}
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
export default CreatePostForm;
