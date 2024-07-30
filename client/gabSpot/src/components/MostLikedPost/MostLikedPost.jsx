import style from "./MostLikedPost.module.css";

function MostLikedPost(params) {
    return (
        <>
            <div className={style["right-side-menu"]}>
                <div className={style["last-post"]}>
                    <div className="header">
                        <h5>Most Liked Post</h5>
                    </div>
                    <div className={style["media"]}>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg" />
                    </div>
                    <div className={style["description"]}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sed inventore quaerat eum repudiandae suscipit
                            soluta aliquid modi delectus, tempora quisquam ve
                        </p>
                    </div>
                    <div className={style["likes"]}>
                        <p>Likes: 3</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MostLikedPost;
