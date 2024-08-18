import { useEffect, useState } from "react";
import style from "./RegisteredUsers.module.css";
import { getAllUsers } from "../../services/userService";
import RegisteredUsersListItem from "./RegisteredUsersList/RegisteredUserListItem";

function RegisteredUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await getAllUsers();
            setUsers(data);
        })();
    }, []);
    return (
        <>
            <div className={style["registered-users"]}>
                <h5>Registered Users</h5>
                <div className={style["user-list-container"]}>
                    {users.length === 0
                        ? "No registered users"
                        : users.map((user) => (
                              <RegisteredUsersListItem
                                  user={user}
                                  key={user._id}
                              />
                          ))}
                </div>
            </div>
        </>
    );
}
export default RegisteredUsers;
