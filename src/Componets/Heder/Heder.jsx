import scss from "./Heder.module.scss";
import Logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router";

function Heder() {
  return (
    <section className={scss.Heder}>
      <div className={scss.contai}>
        <NavLink className={scss.logo} to="/">
          <img src={Logo} alt="Logo" />
          eatly
        </NavLink>
        <div className={scss.contai_a}>
          <NavLink
            className={({ isActive }) => (isActive ? scss.active : "")}
            to="/Menu"
            href=""
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? scss.active : "")}
            to="/Blog"
            href=""
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? scss.active : "")}
            to="/Pricing"
            href=""
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? scss.active : "")}
            to="/Contact"
            href=""
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className={scss.contai_right}>
        <span>Login</span>
        <button>
          <Link to="/Sign_up">Sign up</Link>
        </button>
      </div>
    </section>
  );
}

export default Heder;
