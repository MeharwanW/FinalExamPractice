import "./Header.css"
import imgs from "./../assets/images/Logo.png"
export default function Header() {
    return (
        <div className="header d-flex justify-content-between">
            <div className="Logo">
                <img src={imgs} alt="" />
            </div>
            <div className="h-Nav">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                                <button type="button" className="btn-sm button">sign In</button>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
