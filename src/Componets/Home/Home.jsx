import scss from "./Home.module.scss";
import Vector from "../../assets/trustpilot-1 1.svg";
import Star from "../../assets/Star_a.svg";
import Hero from "../../assets/Hero.svg";

function Home() {
  return (
    <section className={scss.Home}>
      <div className={scss.title}>
        <span>
          <hr />
          OVER 1000 USERS
        </span>
        <h1>
          Enjoy Foods All <br /> Over The{" "}
          <span className={scss.color_title}>World</span>
        </h1>
        <p className={scss.description}>
          EatLy help you set saving goals, earn cash back offers, Go  to
          disclaimer for more details and get paychecks up to two  days early.
          Get a <span className={scss.color_text}>$20 bonus.</span>
        </p>
        <div className={scss.contai_button}>
          <button>Get Started</button>
          <button>Go Pro</button>
        </div>
        <p>
          <img src={Vector} alt="" />
          <img src={Star} alt="" />
          4900+
        </p>
      </div>
      <div className={scss.img}>
        <img src={Hero} alt="" />
      </div>
    </section>
  );
}

export default Home;
