import scss from "./Cart_3.module.scss";
import blog_img from "../../assets/Image_a.svg";
import ELLipse from "../../assets/ELLipse.svg";
import Prev from "../../assets/Back.svg";
import Next from "../../assets/Back_a.svg";

function Cart_3() {
  const blog_cart = [
    {
      img: blog_img,
      p: "How To Track The Order ?",
      Profil: ELLipse,
      h5: "Written By",
      span: "Perperzon",
      h3: "15 DEC, 2022",
    },
    {
      img: blog_img,
      p: "How To Track The Order ?",
      Profil: ELLipse,
      h5: "Written By",
      span: "Perperzon",
      h3: "15 DEC, 2022",
    },
    {
      img: blog_img,
      p: "How To Track The Order ?",
      Profil: ELLipse,
      h5: "Written By",
      span: "Perperzon",
      h3: "15 DEC, 2022",
    },
    {
      img: blog_img,
      p: "How To Track The Order ?",
      Profil: ELLipse,
      h5: "Written By",
      span: "Perperzon",
      h3: "15 DEC, 2022",
    },
    {
      img: blog_img,
      p: "How To Track The Order ?",
      Profil: ELLipse,
      h5: "Written By",
      span: "Perperzon",
      h3: "15 DEC, 2022",
    },
    {
      img: blog_img,
      p: "How To Track The Order ?",
      Profil: ELLipse,
      h5: "Written By",
      span: "Perperzon",
      h3: "15 DEC, 2022",
    },
  ];
  return (
    <section className={scss.Cart_3}>
      <h1>
        Latest <span>Articles</span>
      </h1>
      <div className={scss.contai_blog_cart}>
        {blog_cart.map((item, index) => (
          <div className={scss.cart} key={index}>
            <img src={item.img} alt="" />
            <p>{item.p}</p>
            <div className={scss.Profil}>
              <img src={item.Profil} alt="" />
              <h5>
                {item.h5}
                <br />
                <span>{item.span}</span>
              </h5>
              <h3>{item.h3}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className={scss.novigation}>
        <img src={Prev} alt="" />
        <img src={Next} alt="" />
      </div>
    </section>
  );
}

export default Cart_3;
