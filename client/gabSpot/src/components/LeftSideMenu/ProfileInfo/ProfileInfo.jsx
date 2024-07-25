import React from "react";
import styles from "./ProfileInfo.module.css";

function ProfileInfo({ currentUser }) {
    return (
        <>
            <div className={styles.profileInfo}>
                <a href="#">
                    <div className={styles.profileImg}>
                        <img src={currentUser.profileImage} alt="Profile" />
                    </div>
                    <div className={styles.profileName}>
                        <p>{currentUser.username}</p>
                    </div>
                </a>
            </div>
        </>
    );
}

export default ProfileInfo;
