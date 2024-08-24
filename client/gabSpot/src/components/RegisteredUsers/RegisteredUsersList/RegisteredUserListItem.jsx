import { Link } from "react-router-dom";
import style from "./RegisteredUserListItem.module.css";
import SendMessageModal from "../../SendMessageModal/SendMessageModal";
import { useState } from "react";

function RegisteredUsersListItem({ user }) {
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
