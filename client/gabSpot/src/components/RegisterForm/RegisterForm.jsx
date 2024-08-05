import { useContext, useState } from "react";
import styles from "./RegisterForm.module.css";
import { register } from "../../services/userService";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const { changeAuthState } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        profileImage: "",
        password: "",
        rePassword: "",
    });

    const [error, setError] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = "Username is required.";
        }
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        }
        if (!formData.profileImage.trim()) {
            newErrors.profileImage = "Profile image is required.";
        }
        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
        }
        if (!formData.rePassword.trim()) {
            newErrors.rePassword = "Re-Password is required.";
        }
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const changeHandler = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const res = await register(formData);

            if (res.error) {
                throw new Error(res.error);
            }

            setFormData({
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                profileImage: "",
                password: "",
                rePassword: "",
            });
            setError({});
            changeAuthState(res);
            navigate("/");
        } catch (error) {
            setError({ submit: error.error });
            console.log("error submit" + error.error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <form className={styles.registerForm}>
                    <header>
                        <h3>Sign Up</h3>
                    </header>

                    {error.submit && (
                        <p className={styles.error}>{error.submit}</p>
                    )}
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
                    {error.username && (
                        <p className={styles.error}>{error.username}</p>
                    )}
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
                    {error.firstName && (
                        <p className={styles.error}>{error.firstName}</p>
                    )}
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
                    {error.lastName && (
                        <p className={styles.error}>{error.lastName}</p>
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
                        <label htmlFor="email">Email</label>
                    </div>
                    {error.email && (
                        <p className={styles.error}>{error.email}</p>
                    )}
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
                    {error.profileImage && (
                        <p className={styles.error}>{error.profileImage}</p>
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
                        <label htmlFor="password">Password</label>
                    </div>
                    {error.password && (
                        <p className={styles.error}>{error.password}</p>
                    )}
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
                    {error.rePassword && (
                        <p className={styles.error}>{error.rePassword}</p>
                    )}
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
