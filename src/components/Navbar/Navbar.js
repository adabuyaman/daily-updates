import { Link } from "react-router-dom";
import { logout } from "../../config/firebase";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ReX</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/teams" className="nav-link active">My teams</Link>
                            {/* <a className="nav-link active" aria-current="page" href="#"></a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Soon</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Soon</a>
                        </li>
                    </ul>
                    <span className="text-white me-3">Hello, ahmad</span>
                    <button onClick={logout} className="btn btn-primary">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;