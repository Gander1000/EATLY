import scss from "./Title_cart.module.scss";

function Title_cart () {
    const title = [
      {
        h1: "10K+",
        span: "Satisfied Costumers All Great Over The World ",
      },
      {
        h1: "4M",
        span: "Healthy Dishes Sold Including Milk Shakes Smooth",
      },
      {
        h1: "99.99%",
        span: "Reliable Customer Support We Provide Great Experiences",
      },
    ];
    return(
        <section className={scss.Title_cart}>
            {title.map((item, index) => (
                <div className={scss.cart} key={index}>
                    <h1>{item.h1}</h1>
                    <span>{item.span}</span>
                    <hr />
                </div>
            ))}
        </section>
    )
}

export default Title_cart

