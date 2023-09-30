import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid position-relative">
                <h3>Product App</h3>
                <div className="collapse navbar-collapse position-absolute top-0 end-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/product">product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Login</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}