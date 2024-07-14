import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
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
                        <li className={styles["create-post"]}>
                            <Link to="/createpost">Create Post</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="">Messages</Link>
                        </li>
                        <li>
                            <Link to="">Profile</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="">Logout</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
