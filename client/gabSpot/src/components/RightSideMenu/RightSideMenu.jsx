import style from "./RightSideMenu.module.css";
import MostLikedPost from "../MostLikedPost/MostLikedPost";

function RightSideMenu(params) {
    return (
        <>
            <div className={style["right-side-menu"]}>
                <MostLikedPost />
            </div>
        </>
    );
}
export default RightSideMenu;
