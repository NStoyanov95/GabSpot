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
    const [error, setError] = useState({});

    const changeHandler = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        }
        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
        }
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const user = await login(formData);

            if (user.error) {
                throw new Error(user.error);
            }
            setError({});
            changeAuthState(user);
            navigate("/");
            console.log(user);
        } catch (error) {
            setError({ submit: error.error });
            console.log("error submit" + error.error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <form className={styles.loginForm}>
                    <header>
                        <h3>Login</h3>
                    </header>
                    {error.submit && (
                        <p className={styles.error}>{error.submit}</p>
                    )}

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
                    {error.email && (
                        <p className={styles.error}>{error.email}</p>
                    )}

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
                    {error.password && (
                        <p className={styles.error}>{error.password}</p>
                    )}

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
