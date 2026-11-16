import scss from "./Subscribe.module.scss";
import Food from "../../assets/Food Image.svg";

function Subscribe() {
  return (
    <section className={scss.Subscribe}>
      <div className={scss.contai}>
        <h1>GET 50%</h1>
        <div className={scss.contai_input_buuton}>
          <input type="text" placeholder=" Enter Your Email Address" />
          <button>SUBSCRIDE</button>
        </div>
        <img className={scss.Food} src={Food} alt="" />
      </div>
    </section>
  );
}

export default Subscribe;
