import styles from "./ProfileCard.module.css";
import { useEffect, useState } from "react";
import { getUserWithPosts } from "../../services/userService";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ProfileCard() {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [createdPost, setCreatedPost] = useState([]);
    const [likedPost, setLikedPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await getUserWithPosts(userId);
                setUser(data.user);
                setCreatedPost(data.createdPosts);
                setLikedPost(data.likedPosts);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className={styles.profileContainer}>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className={styles.profile}>
                        <img
                            src={user.profileImage}
                            alt="Profile Avatar"
                            className={styles.avatar}
                        />
                        <h2 className={styles.name}>
                            {user.firstName} {user.lastName}
                        </h2>
                        <p className={styles.email}>{user.email}</p>
                    </div>
                    <div className={styles.postsContainer}>
                        <div className={styles.section}>
                            <h3>My Posts</h3>
                            {createdPost.length !== 0 ? (
                                <div className={styles.postsGrid}>
                                    {createdPost.map((post) => (
                                        <Link
                                            to={`/details/${post._id}`}
                                            key={post._id}
                                        >
                                            <img
                                                src={post.image}
                                                alt="My Post"
                                                className={styles.postImage}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <p>You haven't created any posts yet.</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.section}>
                            <h3>Liked Posts</h3>
                            {likedPost.length !== 0 ? (
                                <div className={styles.postsGrid}>
                                    {likedPost.map((post) => (
                                        <Link
                                            to={`/details/${post._id}`}
                                            key={post._id}
                                        >
                                            <img
                                                src={post.image}
                                                alt="Liked Post"
                                                className={styles.postImage}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <p>You haven't liked any posts yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProfileCard;
