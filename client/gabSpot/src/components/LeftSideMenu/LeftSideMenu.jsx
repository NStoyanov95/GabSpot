import Menu from "./Menu/Menu";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./LeftSideMenu.module.css";

function LeftSideMenu(params) {
    return (
        <>
            <div className={style.leftSideMenu}>
                <ProfileInfo />
                <Menu />
            </div>
        </>
    );
}
export default LeftSideMenu;
