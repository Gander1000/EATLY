import scss from "./Cart_2.module.scss";
import Food from "../../assets/Food Image_a.svg";
import icon from "../../assets/Icon_love.svg";
import Star from "../../assets/Star.svg";

function Cart_2() {
  const data = [
    {
      image: Food,
      love: icon,
      p: "Healthy",
      h4: "The Chicken King",
      span: "24min •",
      span2: "4.5",
      img_span: Star,
      price_h5: "$12",
      price_span: ".99",
      plus: "+",
    },
    {
      image: Food,
      love: icon,
      p: "Healthy",
      h4: "The Chicken King",
      span: "24min •",
      span2: "4.5",
      img_span: Star,
      price_h5: "$12",
      price_span: ".99",
      plus: "+",
    },
    {
      image: Food,
      love: icon,
      p: "Healthy",
      h4: "The Chicken King",
      span: "24min •",
      span2: "4.5",
      img_span: Star,
      price_h5: "$12",
      price_span: ".99",
      plus: "+",
    },
    {
      image: Food,
      love: icon,
      p: "Healthy",
      h4: "The Chicken King",
      span: "24min •",
      span2: "4.5",
      img_span: Star,
      price_h5: "$12",
      price_span: ".99",
      plus: "+",
    },
    {
      image: Food,
      love: icon,
      p: "Healthy",
      h4: "The Chicken King",
      span: "24min •",
      span2: "4.5",
      img_span: Star,
      price_h5: "$12",
      price_span: ".99",
      plus: "+",
    },
  ];
  return (
    <section className={scss.Cart_2}>
      <h1>
        Our Top <span>Dishes</span>
      </h1>
      <div className={scss.contai_card}>
        {data.map((item, index) => (
          <div className={scss.card} key={index}>
            <img className={scss.love} src={item.love} alt="love" />
            <img className={scss.Food} src={item.image} alt="Food" />
            <div className={scss.card_text}>
              <p>{item.p}</p>
              <h4>{item.h4}</h4>
              <div className={scss.card_text_span}>
                <span>{item.span}</span>
                <img src={item.img_span} alt="Star" />
                <span>{item.span2}</span>
              </div>
              <div className={scss.card_text_price}>
                <h5>
                  {item.price_h5}
                  <span>{item.price_span}</span>
                </h5>
                <button className={scss.plus}>{item.plus}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className={scss.foter_click}>
        View All{" "}
        <img
          src="https://img.icons8.ru/?size=100&id=7789&format=png&color=000000"
          alt=""
        />
      </span>
    </section>
  );
}

export default Cart_2;
