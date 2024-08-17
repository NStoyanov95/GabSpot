import CardSection from "../CardSection/CardSection";
import MostLikedPost from "../MostLikedPost/MostLikedPost";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import "./Dashboard.css";
import RightSideMenu from "../RightSideMenu/RightSideMenu";
function Dashboard() {
    return (
        <div className="dashboard">
            <LeftSideMenu />
            <CardSection />
            {/* <MostLikedPost /> */}
            <RightSideMenu />
        </div>
    );
}

export default Dashboard;
