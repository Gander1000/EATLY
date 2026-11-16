import scss from "./FOQs.module.scss";
import illustration from "../../assets/Illustration.svg";
import Plus from "../../assets/Plus.svg";
import Minus from "../../assets/Minus.svg";
import { useState } from "react";

function FOQs() {
  const title = [
    {
      p: "How long does delivery take?",
      span: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
    },
    {
      p: "How long does delivery take?",
      span: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
    },
    {
      p: "How long does delivery take?",
      span: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
    },
    {
      p: "How long does delivery take?",
      span: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
    },
  ];
  const [active, setActive] = useState(null);
  const [plus, setPlus] = useState(Plus);
  return (
    <section className={scss.FOQs}>
      <h1>
        Frequently Asked <br /> <span>Questions</span>
        <img src={illustration} alt="" />
      </h1>
      <div className={scss.contai_title_list}>
        {title.map((item, index) => (
          <div key={index} className={scss.title_cart}>
            <p onClick={() => setActive(active === index ? null : index)}>
              {item.p}{" "}
              <img
                src={active === index ? Minus : Plus}
                alt={active === index ? "Close" : "Open"}
              />
            </p>
            {active === index && <span>{item.span}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FOQs;
