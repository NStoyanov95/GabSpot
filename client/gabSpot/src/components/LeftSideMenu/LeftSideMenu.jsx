import AdditionalInfo from "./AdditionalInfo";
import Menu from "./Menu";
import ProfileInfo from "./ProfileInfo";
import "./LeftSideMenu.css";

function LeftSideMenu(params) {
    return (
        <>
            <div className="left-side-menu">
                <ProfileInfo />
                <AdditionalInfo />
                <Menu />
            </div>
        </>
    );
}
export default LeftSideMenu;
