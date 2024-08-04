import { useEffect, useState } from "react";
import style from "./MostLikedPost.module.css";
import { mostLikedPost } from "../../services/postService";
import { Link } from "react-router-dom";

function MostLikedPost() {
    const [post, setPost] = useState({});
    const [likeLength, setLikeLength] = useState(0);
    useEffect(() => {
        (async () => {
            const data = await mostLikedPost();
            setPost(data);
            setLikeLength(data.likes.length);
        })();
    }, []);
    return (
        <>
            <div className={style["right-side-menu"]}>
                <Link to={`/details/${post._id}`}>
                    <div className={style["last-post"]}>
                        <div className="header">
                            <h5>Most Liked Post</h5>
                        </div>
                        <div className={style["media"]}>
                            <img src={post.image} />
                        </div>
                        <div className={style["likes"]}>
                            <p>Likes: {likeLength}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}
export default MostLikedPost;
