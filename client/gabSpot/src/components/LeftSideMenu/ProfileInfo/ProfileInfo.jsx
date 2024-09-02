import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProfileInfo.module.css";

function ProfileInfo({ currentUser }) {
    return (
        <>
            <div className={styles.profileInfo}>
                <Link to={`/profile/${currentUser._id}`}>
                    <div className={styles.profileImg}>
                        <img src={currentUser.profileImage} alt="Profile" />
                    </div>
                    <div className={styles.profileName}>
                        <p>{currentUser.username}</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ProfileInfo;
