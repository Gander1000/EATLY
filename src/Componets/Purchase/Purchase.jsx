import scss from "./Purchase.module.scss";
import image from "../../assets/Image.svg";
import chevron from "../../assets/chevron-down.svg";
import icon from "../../assets/icon.svg";

function Purchase() {
  const cart = [
    {
      img: image,
      h3: "Chicken Hell",
      span: "On The Way",
      p: "3:09 PM",
    },
    {
      img: image,
      h3: "Chicken Hell",
      span: "On The Way",
      p: "3:09 PM",
    },
    {
      img: image,
      h3: "Chicken Hell",
      span: "On The Way",
      p: "3:09 PM",
    },
  ];
  const con = [
    {
      img: icon,
      h3: "Expense",
      span: "Increased By 10%",
      h2: "$409.00",
    },
    {
      img: icon,
      h3: "Expense",
      span: "Increased By 10%",
      h2: "$409.00",
    },
  ];
  return (
    <section className={scss.Purchase}>
      <div className={scss.contai_title}>
        <h1>
          Control <span>Purchases</span> <br /> Via Dashboard
        </h1>
        <div className={scss.contai_cart}>
          {cart.map((item, index) => (
            <div className={scss.cart} key={index}>
              <img src={item.img} alt="" />
              <h3>
                {item.h3} <span>{item.span}</span>
              </h3>
              <p>{item.p}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={scss.contai}>
        <div className={scss.top}>
          <h3>Purchases</h3>{" "}
          <p>
            This month
            <img src={chevron} alt="" />
          </p>
        </div>
        {con.map((item, index) => (
          <div key={index} className={scss.con}>
            <div className={scss.title_con}>
              <img src={item.img} alt="" />
              <h3>
                {item.h3} <br /> <span>{item.span}</span>
              </h3>
              <h2>{item.h2}</h2>
            </div>
            <div className={scss.contai_hr}>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Purchase;
