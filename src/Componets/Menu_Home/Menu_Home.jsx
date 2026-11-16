import scss from "./Menu_Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Food from "../../assets/Food Image.svg";
import illustration from "../../assets/Illustration.svg";
import Search from "../../assets/Search.svg";
import Pizza from "../../assets/Pizza.svg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useState } from "react";

function Menu_Home() {
  const cart_baner = [
    {
      h1: "50% OFF",
      span: "WEEKWNDS",
      img: Food,
      illus: illustration,
    },
    {
      h1: "50% OFF",
      span: "WEEKWNDS",
      img: Food,
      illus: illustration,
    },
    {
      h1: "50% OFF",
      span: "WEEKWNDS",
      img: Food,
      illus: illustration,
    },
  ];
  const Food_category = [
    {
      img: Pizza,
      p: "Pizza",
    },
    {
      img: Pizza,
      p: "Pizza",
    },
    {
      img: Pizza,
      p: "Pizza",
    },
    {
      img: Pizza,
      p: "Pizza",
    },
  ];
  const [text, setText] = useState("Recomended");
  const [active, setActive] = useState("Food");
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState(25);
  const prices = [0, 25, 50, 100, 500, 1000];
  return (
    <section className={scss.Menu_Home}>
      <div className={scss.contai_left}>
        <Swiper
          className={scss.contai_baner}
          modules={[Pagination]}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={51}
          speed={800}
          loop={true}
          pagination={{ clickable: true }}
        >
          {cart_baner.map((item, index) => (
            <SwiperSlide key={index} className={scss.baner}>
              <h1>
                {item.h1}
                <br />
                <span>{item.span}</span>
              </h1>
              <img className={scss.Food} src={item.img} alt="" />
              <img className={scss.illus} src={item.illus} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={scss.contai_input_button}>
          <div className={scss.input}>
            <img src={Search} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <div className={scss.button}>
            <button
              className={`${scss.button_1} ${active === "Food" ? scss.active : ""}`}
              onClick={() => setActive("Food")}
            >
              Food
            </button>
            <button
              className={`${scss.button_2} ${active === "Resturent" ? scss.active : ""}`}
              onClick={() => setActive("Resturent")}
            >
              Resturent
            </button>
          </div>
        </div>
      </div>
      <div className={scss.contai_right}>
        <h3>Category</h3>
        <div className={scss.contai_Food}>
          {Food_category.map((item, index) => (
            <div
              key={index}
              className={`${scss.food_cart} ${category === index ? scss.active_food : ""}`}
              onClick={() => setCategory(index)}
            >
              <img src={item.img} alt="" />
              <p>{item.p}</p>
            </div>
          ))}
        </div>
        <h3>Sort By</h3>
        <div className={scss.contai_text}>
          <p
            className={`${scss.p} ${text === "Recomended" ? scss.active_p : ""}`}
            onClick={() => setText("Recomended")}
          >
            Recomended
          </p>
          <p
            className={`${scss.p} ${text === "Most Popular" ? scss.active_p : ""}`}
            onClick={() => setText("Most Popular")}
          >
            Most Popular
          </p>
          <p
            className={`${scss.p} ${text === "Fast Delivery" ? scss.active_p : ""}`}
            onClick={() => setText("Fast Delivery")}
          >
            Fast Delivery
          </p>
        </div>
        <h3>Price</h3>
        <div className={scss.Price}>
          <input
            type="range"
            min="0"
            max="1000"
            step="1"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className={scss.slider}
            style={{
              "--progress": `${(price / 1000) * 100}%`,
            }}
          />

          <div className={scss.prices}>
            {prices.map((item) => (
              <span>${item}</span>
            ))}
          </div>
        </div>
        <button className={scss.bottom_Apply}>Apply</button>
      </div>
    </section>
  );
}

export default Menu_Home;
