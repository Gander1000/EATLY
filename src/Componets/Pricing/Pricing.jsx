import scss from "./Pricing.module.scss";
import Home from "../../assets/17-Home V1 1.svg";
import Vector from "../../assets/Vector.svg";
import Lini from "../../assets/01.svg"
import Lini_a from "../../assets/02.svg";

function Pricing() {
  return (
    <section className={scss.Pricing}>
      <div className={scss.Fon}></div>
      <h1>
        <img src={Vector} alt="" /> Our Pricing
      </h1>
      <img className={scss.menu_mini} src={Home} alt="" />
      <img className={scss.lini_right_top} src={Lini} alt="" />
      <img className={scss.Lini_left_bottom} src={Lini_a} alt="" />
    </section>
  );
}

export default Pricing;
