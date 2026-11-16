import scss from "./Coment.module.scss";
import Stars from "../../assets/Stars.svg";
import Pic from "../../assets/Pic.svg";
import Path from "../../assets/Path.svg";

function Coment() {
  const com = [
    {
      Men: [
        {
          men: Pic,
          name: "Alexander R.",
          date: "01 Year With Us",
          img: Path,
          span: "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
          star: Stars,
        },
      ],
    },
    {
      Container_com: [
        {
          span: "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
          star: Stars,
        },
        {
          span: "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
          star: Stars,
        },
        {
          span: "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
          star: Stars,
        },
        {
          span: "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
          star: Stars,
        },
      ],
    },
  ];

  return (
    <section className={scss.Coment}>
      <h1>
        <span>Customer</span>
        Say
      </h1>
      <div className={scss.container}>
        {com.map((item, index) => (
          <div className={scss.contai_com} key={index}>
            {item.Men?.map((user, number) => (
              <div key={number} className={scss.top_date}>
                <div className={scss.text_top}>
                  <img className={scss.men} src={user.men} alt="" />

                  <h3>
                    {user.name}
                    <span>{user.date}</span>
                  </h3>

                  <img className={scss.right} src={user.img} alt="" />
                </div>

                <span>{user.span}</span>

                <img className={scss.Stars} src={user.star} alt="" />
              </div>
            ))}
            {item.Container_com && (
              <div className={scss.contai}>
                {item.Container_com.map((comment, num) => (
                  <div key={num} className={scss.com}>
                    <span>{comment.span}</span>
                    <img src={comment.star} alt="" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Coment;
