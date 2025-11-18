import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>something</li>
          <li>something</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
