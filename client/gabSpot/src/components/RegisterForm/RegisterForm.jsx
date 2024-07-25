import { useContext, useState } from "react";
import styles from "./RegisterForm.module.css";
import { register } from "../../services/userService";
import AuthContext from "../../contexts/AuthContext";

function RegisterForm() {
    const { changeAuthState } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        profileImage: "",
        password: "",
        rePassword: "",
    });

    const changeHandler = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await register(formData);

            if (!res.error) {
                setFormData({
                    username: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    profileImage: "",
                    password: "",
                    rePassword: "",
                });
            }

            changeAuthState(res);

            console.log(formData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <form className={styles.registerForm}>
                    <header>
                        <h3>Sign Up</h3>
                    </header>
                    <div className={`${styles.field} ${styles.fieldText}`}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onChange={changeHandler}
                            value={formData.username}
                            className={styles.fieldInput}
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className={`${styles.field} ${styles.fieldText}`}>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            onChange={changeHandler}
                            value={formData.firstName}
                            className={styles.fieldInput}
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className={`${styles.field} ${styles.fieldText}`}>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            onChange={changeHandler}
                            value={formData.lastName}
                            className={styles.fieldInput}
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className={`${styles.field} ${styles.fieldText}`}>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={changeHandler}
                            value={formData.email}
                            className={styles.fieldInput}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={`${styles.field} ${styles.fieldText}`}>
                        <input
                            type="text"
                            name="profileImage"
                            id="profileImage"
                            placeholder="profile image"
                            onChange={changeHandler}
                            value={formData.profileImage}
                            className={styles.fieldInput}
                        />
                        <label htmlFor="profileImage">Profile image URL</label>
                    </div>
                    <div className={`${styles.field} ${styles.fieldText}`}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={changeHandler}
                            value={formData.password}
                            className={styles.fieldInput}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className={`${styles.field} ${styles.fieldText}`}>
                        <input
                            type="password"
                            name="rePassword"
                            id="rePassword"
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            value={formData.rePassword}
                            className={styles.fieldInput}
                        />
                        <label htmlFor="rePassword">Confirm Password</label>
                    </div>
                    <input
                        type="submit"
                        value="Sign Up"
                        className={styles.submitBtn}
                        onClick={submitHandler}
                    />
                    <div className={styles.loginRedirect}>
                        <p>
                            Already have an account?
                            <a href="#">Login Here</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
