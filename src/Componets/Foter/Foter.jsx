import scss from "./Foter.module.scss";
import logo from "../../assets/logo.svg";
import instogram from "../../assets/Group 888.svg";

function Foter() {
  return (
    <section className={scss.Foter}>
      <div className={scss.contai_top}>
        <p className={scss.logo}>
          <img src={logo} alt="" />
          eatly
        </p>
        <div className={scss.contai_a}>
          <a href="">Blog</a>
          <a href="">Pricing</a>
          <a href="">About Us</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className={scss.contai_bottom}>
        <span>© 2023 EATLY All Rights Reserved.</span>
        <div className={scss.contai_masengs}>
          <img src={instogram} alt="" />
          <img src={instogram} alt="" />
          <img src={instogram} alt="" />
          <img src={instogram} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Foter;
