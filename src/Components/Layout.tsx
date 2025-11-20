import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="layout">
      <nav className="navbar">
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/compare-players">
            <li>Compare players</li>
          </Link>
          <li>something</li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
