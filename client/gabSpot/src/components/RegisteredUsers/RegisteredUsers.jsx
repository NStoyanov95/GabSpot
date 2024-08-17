import style from "./RegisteredUsers.module.css";
import { Link } from "react-router-dom";

function RegisteredUsers(params) {
    return (
        <>
            <div className={style["registered-users"]}>
                <h5>Registered Users</h5>
                <div className={style["user-list-container"]}>
                    <div className={style["user-list"]}>
                        <img
                            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2152"
                            alt="user"
                        />
                        <p>Ivan Mikov</p>
                        <div className={style["buttons"]}>
                            <Link>
                                <i className="fas fa-user"></i>
                            </Link>
                            <Link>
                                <i className="fas fa-comment"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RegisteredUsers;
