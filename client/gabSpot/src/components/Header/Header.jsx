import styles from "./Header.module.css";

function Header() {
    return (
        <>
            <header className={styles["site-header"]}>
                <div className={styles["site-logo"]}>
                    <a href="">
                        <h2>GapSpot^^</h2>
                    </a>
                </div>
                <div className={styles["navigation-menu"]}>
                    <ul className={styles["menu-list"]}>
                        <li className={styles["create-post"]}>
                            <a href="">Create Post</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Dashboard</a>
                        </li>
                        <li>
                            <a href="">Messages</a>
                        </li>
                        <li>
                            <a href="">Profile</a>
                        </li>
                        <li>
                            <a href="">Logout</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
