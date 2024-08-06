import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>404</h1>
            <p className={styles.message}>
                Oops! We searched high and low, but we couldn't find the page
                you wanted. Let's head home.
            </p>
            <Link to="/" className={styles.homeLink}>
                Go to Home Page
            </Link>
        </div>
    );
}

export default NotFoundPage;
