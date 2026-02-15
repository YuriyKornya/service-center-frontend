import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">ServiceCenter</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navb">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navb">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Клієнти</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/devices">Пристрої</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Працівники</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/repairs">Ремонти</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/personal">Особистий кабінет</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
