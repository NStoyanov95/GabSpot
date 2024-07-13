import { useState } from "react";
import styles from "./LoginForm.module.css";
import { login } from "../../services/userService";

function LoginForm() {
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

        const user = await login(formData);

        if (!user.error) {
            setFormData({
                email: "",
                password: "",
            });
        }

        console.log(user);
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
