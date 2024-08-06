import { Link } from "react-router-dom";
import style from "./Menu.module.css";
function Menu({ userId }) {
    return (
        <>
            <div className={style.menu}>
                <ul>
                    <li>
                        <Link to={`/profile/${userId}`}>
                            <i className="fas fa-user"></i> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <i className="fas fa-sign-out-alt logout-icon"></i>{" "}
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Menu;
