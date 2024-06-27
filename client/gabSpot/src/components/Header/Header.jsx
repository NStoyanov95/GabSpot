import "./Header.css";
function Header() {
    return (
        <>
            <header className="site-header">
                <div className="site-logo">
                    <h2>GapSpot^^</h2>
                </div>
                <div className="functions">
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <div className="navigation-menu">
                    <ul className="menu-list">
                        <li className="create-post">
                            {" "}
                            <i className="fas fa-pencil-alt"></i>
                        </li>
                        <li>
                            <i className="fas fa-home"></i>
                        </li>
                        <li>
                            <i className="fas fa-tachometer-alt"></i>
                        </li>
                        <li>
                            <i className="fas fa-comment"></i>
                        </li>
                        <li>
                            <i className="fas fa-user"></i>
                        </li>
                        <li>
                            <i className="fas fa-sign-out-alt logout-icon"></i>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
export default Header;
