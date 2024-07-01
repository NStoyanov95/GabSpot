import "./Homepage.css";
import videoFile from "../../assets/backgroundVideo.mp4";
function Homepage() {
    return (
        <div className="homepage">
            <div className="video-background">
                <video autoPlay muted loop id="bg-video">
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>

            <div className="content">
                <header>
                    <h1>Welcome to GabSpot!</h1>
                    <h4>Your World, Connected.</h4>
                </header>
                <section className="features">
                    <div className="feature">
                        <h2>Connect</h2>
                        <p>
                            Expand your network and keep close with friends and
                            family. GabSpot brings everyone together.
                        </p>
                    </div>
                    <div className="feature">
                        <h2>Share</h2>
                        <p>
                            Post your stories and photos. Express yourself and
                            share your moments with the world.
                        </p>
                    </div>
                    <div className="feature">
                        <h2>Inspire</h2>
                        <p>
                            Follow your favorite influencers and discover
                            trending content that fuels your passion.
                        </p>
                    </div>
                    <div className="feature">
                        <h2>Explore</h2>
                        <p>
                            Delve into trending topics and join communities that
                            match your interests.
                        </p>
                    </div>
                    <div className="feature">
                        <h2>Engage</h2>
                        <p>
                            React, comment, and share. Join the conversation and
                            make your voice heard.
                        </p>
                    </div>
                    <div className="feature">
                        <h2>Customize</h2>
                        <p>
                            Personalize your profile with themes, photos, and a
                            bio that tells your story.
                        </p>
                    </div>
                </section>
                <section className="join">
                    <h2>How to Join</h2>
                    <p>
                        Ready to be a part of GabSpot? It’s simple to get
                        started.
                    </p>
                    <div className="join-links">
                        <a href="login.html" className="btn">
                            <i className="fas fa-sign-in-alt"></i> Login
                        </a>
                        <a href="register.html" className="btn">
                            <i className="fas fa-user-plus"></i> Register
                        </a>
                    </div>
                </section>
                <section className="why-us">
                    <h2>Why Choose GabSpot?</h2>
                    <div className="reasons">
                        <div className="reason">
                            <i className="fas fa-check-circle"></i>
                            <h3>User-Friendly Interface</h3>
                            <p>
                                Enjoy a seamless and intuitive user experience
                                designed for easy navigation.
                            </p>
                        </div>
                        <div className="reason">
                            <i className="fas fa-lock"></i>
                            <h3>Top-Notch Security</h3>
                            <p>
                                Your data is protected with state-of-the-art
                                security measures, ensuring your privacy and
                                safety.
                            </p>
                        </div>
                        <div className="reason">
                            <i className="fas fa-users-cog"></i>
                            <h3>Community Driven</h3>
                            <p>
                                Join a vibrant community where users help shape
                                the future of GabSpot with their feedback.
                            </p>
                        </div>
                        <div className="reason">
                            <i className="fas fa-chart-line"></i>
                            <h3>Constantly Evolving</h3>
                            <p>
                                Benefit from regular updates and new features
                                that keep GabSpot fresh and exciting.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Homepage;
