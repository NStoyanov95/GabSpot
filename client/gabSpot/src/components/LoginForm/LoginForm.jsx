import { useContext, useState } from "react";
import styles from "./LoginForm.module.css";
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function LoginForm() {
    const { changeAuthState } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
            const user = await login(formData);

            if (!user.error) {
                setFormData({
                    email: "",
                    password: "",
                });
            }
            changeAuthState(user);
            navigate("/");
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <form className={styles.loginForm}>
                    <header>
                        <h3>Login</h3>
                    </header>
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
                        <label
                            htmlFor="email"
                            className={styles.fieldTextLabel}
                        >
                            Email
                        </label>
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
                        <label
                            htmlFor="password"
                            className={styles.fieldTextLabel}
                        >
                            Password
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        className={styles.submitBtn}
                        onClick={submitHandler}
                    />
                    <div className={styles.loginRedirect}>
                        <p>
                            Don't have an account?
                            <a href="#">Register Here</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
