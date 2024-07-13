import { useState } from "react";
import "./RegisterForm.css";

import { register } from "../../services/userService";
function RegisterForm() {
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

        console.log(formData);
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
                                id="firstName"
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
                                id="lastName"
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
                                id="profileImage"
                                placeholder="profile image"
                                onChange={changeHandler}
                                value={formData.profileImage}
                            />
                            <label htmlFor="profileImage">
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
                                name="rePassword"
                                id="rePassword"
                                placeholder="Confirm Password"
                                onChange={changeHandler}
                                value={formData.rePassword}
                            />
                            <label htmlFor="rePassword">Confirm Password</label>
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
