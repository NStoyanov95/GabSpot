import { useState } from "react";
import styles from "./CreatePostForm.module.css";
import { createPost } from "../../services/postService";

function CreatePostForm() {
    const [formData, setFormData] = useState({
        image: "",
        content: "",
    });
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.image.trim()) {
            newErrors.image = "Image URL is required.";
        }

        if (!formData.content.trim()) {
            newErrors.content = "Content is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const res = await createPost(formData);
            if (res.error) {
                throw new Error(res.error);
            }
            setFormData({ image: "", content: "" });
            setErrors({});
        } catch (error) {
            setErrors({ submit: error.message });
        }
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
                    <form
                        className={styles.createPostForm}
                        onSubmit={submitHandler}
                    >
                        <div className={styles.field}>
                            <label htmlFor="imageUrl">Image URL</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="image"
                                value={formData.image}
                                onChange={changeHandler}
                            />
                            {errors.image && (
                                <p className={styles.error}>{errors.image}</p>
                            )}
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="content">Content</label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={changeHandler}
                            />
                            {errors.content && (
                                <p className={styles.error}>{errors.content}</p>
                            )}
                        </div>
                        <input
                            type="submit"
                            value="Post"
                            className={styles.submitBtn}
                        />
                        {errors.submit && (
                            <p className={styles.error}>{errors.submit}</p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreatePostForm;
