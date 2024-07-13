import React from "react";
import styles from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <>
            <div className={styles.profileInfo}>
                <a href="#">
                    <div className={styles.profileImg}>
                        <img
                            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
                            alt="Profile"
                        />
                    </div>
                    <div className={styles.profileName}>
                        <p>Huan Huan</p>
                    </div>
                </a>
            </div>
            <div className={styles.additionalInfo}>
                <div className={styles.columns}>
                    <p>25</p>
                    <p>following</p>
                </div>
                <div className={styles.columns}>
                    <p>25</p>
                    <p>followers</p>
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;
