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
                            <a href="">
                                <i className="fas fa-pencil-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-home"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-tachometer-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-comment"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-user"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i
                                    className={`fas fa-sign-out-alt ${styles["logout-icon"]}`}
                                ></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
