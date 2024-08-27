import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import MessagesModal from "../../MessagesModal/MessagesModal";
function Menu({ userId }) {
    return (
        <>
            <div className={style.menu}>
                <ul>
                    <Link to={`/profile/${userId}`}>
                        <li className={style["list-item"]}>
                            <i className="fas fa-user"></i> Profile
                        </li>
                    </Link>

                    <Link>
                        <li className={style["list-item"]}>
                            <i className="fas fa-comment"></i> Messages
                        </li>
                    </Link>

                    <Link to="/logout">
                        <li className={style["list-item"]}>
                            <i className="fas fa-sign-out-alt logout-icon"></i>{" "}
                            Logout
                        </li>
                    </Link>
                </ul>
            </div>
            {/* <MessagesModal /> */}
        </>
    );
}
export default Menu;
