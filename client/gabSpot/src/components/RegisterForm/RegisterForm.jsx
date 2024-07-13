import "./RegisterForm.css";
function RegisterForm() {
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
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="field text first-name">
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                placeholder="First Name"
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="field text last-name">
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                placeholder="Last Name"
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="field text email">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="field text profile-image">
                            <input
                                type="text"
                                name="profileImage"
                                id="profile-image"
                                placeholder="profile image"
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
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="field text repeat-password">
                            <input
                                type="password"
                                name="repeatPassword"
                                id="repeat-password"
                                placeholder="Confirm Password"
                            />
                            <label htmlFor="repeatPassword">
                                Confirm Password
                            </label>
                        </div>
                        <input
                            type="submit"
                            value="Sign Up"
                            className="submit-btn"
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
