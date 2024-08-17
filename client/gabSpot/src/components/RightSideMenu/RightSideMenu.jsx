import style from "./RightSideMenu.module.css";
import MostLikedPost from "../MostLikedPost/MostLikedPost";
import RegisteredUsers from "../RegisteredUsers/RegisteredUsers";

function RightSideMenu(params) {
    return (
        <>
            <div className={style["right-side-menu"]}>
                <MostLikedPost />
                <RegisteredUsers />
            </div>
        </>
    );
}
export default RightSideMenu;
