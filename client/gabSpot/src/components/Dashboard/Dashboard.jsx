import CardSection from "../CardSection/CardSection";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import "./Dashboard.css";
function Dashboard() {
    return (
        <div className="dashboard">
            <LeftSideMenu />
            <CardSection />
        </div>
    );
}

export default Dashboard;
