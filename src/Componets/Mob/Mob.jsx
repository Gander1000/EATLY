import scss from "./Mob.module.scss";
import mobile from "../../assets/Mobile.svg";
import Arrow from "../../assets/Arrow.svg"
import Vector from "../../assets/Vector 14.svg"

function Mob() {
  return (
    <section className={scss.Mob}>
      <img src={mobile} alt="" />

      <div className={scss.title}>
        <h1>
          Premium <span>Quality</span> For Your Health
        </h1>

        <div className={scss.contai_span}>
          <span>
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </span>

          <span>
            These foods promote overall wellness by supporting healthy digestion
            and boosting immunity.
          </span>
        </div>

        <button>Download <img src={Arrow} alt="" /></button>
        <img className={scss.Vector} src={Vector} alt="" />
      </div>
    </section>
  );
}

export default Mob;
