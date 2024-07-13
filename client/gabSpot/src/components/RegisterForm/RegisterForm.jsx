import { useState } from "react";
import "./RegisterForm.css";
function RegisterForm() {
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        profileImage: "",
        password: "",
        repeatPassword: "",
    });

    const changeHandler = (e) => {
        setFormData((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(formData);
        setFormData({
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            profileImage: "",
            password: "",
            repeatPassword: "",
        });
    };
    return (
        <>
            <div className="form-container">
                <div className="form-wrapper">
                    <form className="register-form">
                        <header>
                            <h3>Sign Up</h3>
                        </header>
                        <div className="field text username">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                onChange={changeHandler}
                                value={formData.username}
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="field text first-name">
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                placeholder="First Name"
                                onChange={changeHandler}
                                value={formData.firstName}
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="field text last-name">
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                placeholder="Last Name"
                                onChange={changeHandler}
                                value={formData.lastName}
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="field text email">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={changeHandler}
                                value={formData.email}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="field text profile-image">
                            <input
                                type="text"
                                name="profileImage"
                                id="profile-image"
                                placeholder="profile image"
                                onChange={changeHandler}
                                value={formData.profileImage}
                            />
                            <label htmlFor="profile-image">
                                Profile image URL
                            </label>
                        </div>
                        <div className="field text password">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={changeHandler}
                                value={formData.password}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="field text repeat-password">
                            <input
                                type="password"
                                name="repeatPassword"
                                id="repeat-password"
                                placeholder="Confirm Password"
                                onChange={changeHandler}
                                value={formData.repeatPassword}
                            />
                            <label htmlFor="repeatPassword">
                                Confirm Password
                            </label>
                        </div>
                        <input
                            type="submit"
                            value="Sign Up"
                            className="submit-btn"
                            onClick={submitHandler}
                        />
                        <div className="loginRedirect">
                            <p>
                                Already have an account?
                                <a href="#">Login Here</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;
