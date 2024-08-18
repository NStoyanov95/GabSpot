import { Link } from "react-router-dom";
import style from "./RegisteredUserListItem.module.css";

function RegisteredUsersListItem({ user }) {
    return (
        <>
            <div className={style["user-list"]} key={user._id}>
                <img src={user.profileImage} alt="user" />
                <p>
                    {user.firstName} {user.lastName}
                </p>
                <div className={style["buttons"]}>
                    <Link to={`/profile/${user._id}`}>
                        <i className="fas fa-user"></i>
                    </Link>
                    <Link>
                        <i className="fas fa-comment"></i>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default RegisteredUsersListItem;
