import { Link } from "react-router-dom";
import style from "./RegisteredUserListItem.module.css";
import SendMessageModal from "../../SendMessageModal/SendMessageModal";
import { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";

function RegisteredUsersListItem({ user }) {
    const { isAuth } = useContext(AuthContext);
    const [isMessageModalShown, setIsMessageModalShown] = useState(false);

    const closeMessageModal = () => {
        setIsMessageModalShown(false);
    };

    return (
        <>
            {isMessageModalShown && (
                <SendMessageModal
                    closeMessageModal={closeMessageModal}
                    user={user}
                    isAuth={isAuth}
                />
            )}
            <div className={style["user-list"]} key={user._id}>
                <img src={user.profileImage} alt="user" />
                <p>
                    {user.firstName} {user.lastName}
                </p>
                <div className={style["buttons"]}>
                    <Link to={`/profile/${user._id}`}>
                        <i className="fas fa-user"></i>
                    </Link>
                    <Link onClick={() => setIsMessageModalShown(true)}>
                        <i className="fas fa-comment"></i>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default RegisteredUsersListItem;
