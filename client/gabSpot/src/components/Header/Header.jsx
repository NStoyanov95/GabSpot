import "./Header.css";
function Header() {
    return (
        <>
            <header className="site-header">
                <div className="site-logo">
                    <a href="">
                        <h2>GapSpot^^</h2>
                    </a>
                </div>
                <div className="navigation-menu">
                    <ul className="menu-list">
                        <li className="create-post">
                            <a href="">
                                <i className="fas fa-pencil-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-home"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-tachometer-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-comment"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-user"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-sign-out-alt logout-icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
export default Header;
