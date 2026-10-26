import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <aside>
            <nav className="navbar-container">
                <section className="left-nav">
                    <NavLink to="/" className="logo">ApplyFlow</NavLink>
                    <nav className="nav-links">
                        <NavLink to="/" className="nav-link">Overview</NavLink>
                        <NavLink to="/applications" className="nav-link">Applications</NavLink>
                        <NavLink to="/settings" className="nav-link">Settings</NavLink>
                    </nav>
                </section>
                <div className="user-circle">
                    <span className="user-initials">JD</span>
                </div>
            </nav>
        </aside>
    )
}