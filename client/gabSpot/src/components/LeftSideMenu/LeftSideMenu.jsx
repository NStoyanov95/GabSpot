import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import Menu from "./Menu/Menu";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
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
