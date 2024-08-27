import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import MessagesModal from "../../MessagesModal/MessagesModal";
import { useShowMessages } from "../../../hooks/useMessage";

function Menu({ userId }) {
    const { showMessages, showMessagesHandler, hideMessagesHandler } =
        useShowMessages();

    return (
        <>
            <div className={style.menu}>
                <ul>
                    <Link to={`/profile/${userId}`}>
                        <li className={style["list-item"]}>
                            <i className="fas fa-user"></i> Profile
                        </li>
                    </Link>

                    <Link onClick={showMessagesHandler}>
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
            {showMessages && (
                <MessagesModal hideMessagesHandler={hideMessagesHandler} />
            )}
        </>
    );
}
export default Menu;
