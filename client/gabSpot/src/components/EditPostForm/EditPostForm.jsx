import { useEffect, useState } from "react";
import styles from "./EditPostForm.module.css";
import { editPost, getSinglePost } from "../../services/postService";
import { useNavigate, useParams } from "react-router-dom";
function EditPostForm(params) {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: "",
        content: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        (async () => {
            const post = await getSinglePost(postId);
            setFormData({
                image: post.image,
                content: post.content,
            });
        })();
    }, [postId]);

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

    const changeHandler = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }
        try {
            const res = await editPost(postId, formData);
            if (res.error) {
                throw new Error(res.error);
            }
            setFormData({ image: "", content: "" });
            setErrors({});
            if (res) {
                navigate(`/details/${postId}`);
            }
        } catch (error) {
            setErrors({ submit: error.error });
        }
    };
    return (
        <>
            <div className={styles.formWrapper}>
                <div className={styles.leftSide}>
                    <h3>Edit Your Post</h3>
                    <p>
                        At GabSpot, we value the power of your voice and the
                        stories you share. Whether you're refining a thought,
                        updating a photo, or revising a story, your posts
                        continue to inspire and engage. Join our community of
                        storytellers and ensure your unique perspective
                        resonates with friends and followers.
                    </p>
                </div>
                <div className={styles.rightSide}>
                    <h3>Edit Post</h3>
                    <form className={styles.editPostForm}>
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
                            onClick={submitHandler}
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

export default EditPostForm;
