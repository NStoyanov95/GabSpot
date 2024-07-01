function Menu(params) {
    return (
        <>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">
                            <i className="fas fa-user"></i> Profile
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-comment"></i> Messages
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-sign-out-alt logout-icon"></i>{" "}
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Menu;
