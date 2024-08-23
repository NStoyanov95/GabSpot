import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Header() {
    const { isAuth, userId } = useContext(AuthContext);
    return (
        <>
            <header className={styles["site-header"]}>
                <div className={styles["site-logo"]}>
                    <Link to="/">
                        <h2>GapSpot^^</h2>
                    </Link>
                </div>
                <div className={styles["navigation-menu"]}>
                    <ul className={styles["menu-list"]}>
                        {/* Add dynamic navigation */}

                        {isAuth ? (
                            <>
                                <li className={styles["create-post"]}>
                                    <Link to="/createpost">Create Post</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">Messages</Link>
                                </li>
                                <li>
                                    <Link to={`/profile/${userId}`}>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
