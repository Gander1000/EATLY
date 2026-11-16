import scss from "./BG.module.scss";
import Tick from "../../assets/Tick.svg";

function BG() {
  const cart = [
    {
      p: "Support 24/7",
      img_1: Tick,
      img_2: Tick,
    },
    {
      p: "Support 24/7",
      img_1: Tick,
      img_2: Tick,
    },
    {
      p: "Support 24/7",
      img_1: Tick,
      img_2: Tick,
    },
    {
      p: "Support 24/7",
      img_1: Tick,
      img_2: Tick,
    },
    {
      p: "Support 24/7",
      img_1: Tick,
      img_2: Tick,
    },
    {
      p: "Support 24/7",
      img_1: Tick,
      img_2: Tick,
    },
    {
      p: "Support 24/7",
      img_1: Tick,
      img_2: Tick,
    },
  ];
  return (
    <section className={scss.BG}>
      <div className={scss.container}>
        <div className={scss.top_title}>
          <h1>
            Pricing<span>Affordable Basic & Pro Plans </span>
          </h1>
          <h1>
            Pricing<span>Affordable Basic & Pro Plans </span>
          </h1>
          <h1>
            Pricing<span>Affordable Basic & Pro Plans </span>
          </h1>
        </div>
        <div className={scss.price_contai}>
          <h1>
            <h6></h6>
            <span></span>
          </h1>
          <h1>
            <h6>$</h6>0<span>/month</span>
          </h1>
          <h1>
            <h6>$</h6>5<span>/month</span>
          </h1>
        </div>
        <div className={scss.cart_contai}>
          <p>Core features</p>
          {cart.map((item, index) => (
            <div className={scss.cart} key={index}>
              <p>{item.p}</p>
              <img src={item.img_1} alt="" />
              <img src={item.img_2} alt="" />
            </div>
          ))}
        </div>
        <div className={scss.button_foter}>
          <p></p>
          <button className={scss.button_2}>start free</button>
          <button>start Pro</button>
        </div>
      </div>
    </section>
  );
}

export default BG;
