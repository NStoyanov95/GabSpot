import CardSection from "../CardSection/CardSection";
import MostLikedPost from "../MostLikedPost/MostLikedPost";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import "./Dashboard.css";
function Dashboard() {
    return (
        <div className="dashboard">
            <LeftSideMenu />
            <CardSection />
            <MostLikedPost />
        </div>
    );
}

export default Dashboard;
