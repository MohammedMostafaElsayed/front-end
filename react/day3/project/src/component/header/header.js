import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid position-relative">
                <h3>Product App</h3>
                <div className="collapse navbar-collapse position-absolute top-0 end-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "orange" : "black",
                                    };
                                }}
                            >
                                home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/login"
                                className="nav-link"
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "orange" : "black",
                                    };
                                }}
                            >
                                login
                            </NavLink>


                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/regester"
                                className="nav-link"
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "orange" : "black",
                                    };
                                }}
                            >
                                Register
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/messages"
                                className="nav-link"
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "orange" : "black",
                                    };
                                }}
                            >
                                cart
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav >
    );
}