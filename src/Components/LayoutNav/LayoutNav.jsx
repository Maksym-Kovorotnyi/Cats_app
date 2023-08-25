import { Link } from "react-router-dom";
import css from "./LayoutNav.module.css";

function LayoutNav() {
  return (
    <>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <div className={css.navBcgImg}></div>
            <Link className={css.navText} to="/voting">
              VOTING
            </Link>
          </li>
          <li className={css.navItem}>
            <div className={css.navBcgImg}></div>
            <Link className={css.navText} to="/breeds">
              BREEDS
            </Link>
          </li>
          <li className={css.navItem}>
            <div className={css.navBcgImg}></div>
            <Link className={css.navText} to="/gallery">
              GALLERY
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default LayoutNav;
