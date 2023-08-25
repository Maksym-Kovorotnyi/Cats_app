import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import LayoutNav from "../Components/LayoutNav/LayoutNav";

function Layout() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <header style={{ marginRight: "auto" }}>
        <Link to="/">
          <Logo />
        </Link>
        <h1>Hi! &#128075;</h1>
        <h2>Welcome to MacPaw Bootcamp 2023</h2>
        <h3>Lets start using The Cat API</h3>
        <LayoutNav />
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
