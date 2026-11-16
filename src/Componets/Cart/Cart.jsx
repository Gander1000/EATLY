import scss from "./Cart.module.scss";
import Resturent from "../../assets/Resturent Image.svg";
import Star from "../../assets/Star.svg";
import Bookmark from "../../assets/Bookmark.svg";

function Cart() {
  const data = [
    {
      image: Resturent,
      p: "Healthy",
      h4: "The Chicken King",
      span: "24min",
      span2: "4.5",
      img_span: Star,
      img_bookmark: Bookmark,
    },
    {
      image: Resturent,
      p: "Healthy",
      h4: "The Chicken King",
      span: "24min",
      span2: "4.5",
      img_span: Star,
      img_bookmark: Bookmark,
    },
    {
      image: Resturent,
      p: "Healthy",
      h4: "The Chicken King",
      span: "24min",
      span2: "4.5",
      img_span: Star,
      img_bookmark: Bookmark,
    },
  ];
  return (
    <section className={scss.Cart}>
      <h1>
        Our Top <span>Restaurants</span>
      </h1>
      <div className={scss.contai_card}>
        {data.map((item, index) => (
          <div className={scss.card} key={index}>
            <img className={scss.Resturent} src={item.image} alt="Resturent" />
            <div className={scss.card_text}>
              <p>{item.p}</p>
              <h4>{item.h4}</h4>
              <div className={scss.card_text_span}>
                <span>{item.span}</span>
                <img src={item.img_span} alt="Star" />
                <span>{item.span2}</span>
                <img
                  className={scss.Bookmark}
                  src={item.img_bookmark}
                  alt="Bookmark"
                />
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

export default Cart;
