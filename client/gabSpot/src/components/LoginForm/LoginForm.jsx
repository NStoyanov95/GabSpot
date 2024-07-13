import { useState } from "react";
import "./LoginForm.css";
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
        <>
            <div className="form-container">
                <div className="form-wrapper">
                    <form className="login-form">
                        <header>
                            <h3>Login</h3>
                        </header>
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
                        <input
                            type="submit"
                            value="Login"
                            className="submit-btn"
                            onClick={submitHandler}
                        />
                        <div className="loginRedirect">
                            <p>
                                Dont have account?
                                <a href="#">Register Here</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
