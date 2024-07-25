import Menu from "./Menu/Menu";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./LeftSideMenu.module.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { getCurrentUser } from "../../services/userService";
import { Link } from "react-router-dom";

function LeftSideMenu(params) {
    const { userId, isAuth } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        (async () => {
            if (userId) {
                const data = await getCurrentUser(userId);
                setCurrentUser(data);
            }
        })();
    }, [userId]);

    return (
        <div className={style.leftSideMenu}>
            {isAuth ? (
                <>
                    <ProfileInfo currentUser={currentUser} />
                    <Menu />
                </>
            ) : (
                <Link to="/login" className={style.link}>
                    Login to get started
                </Link>
            )}
        </div>
    );
}

export default LeftSideMenu;
