import "./App.css";
import Heder from "./Componets/Heder/Heder";
import Home from "./Componets/Home/Home";
import Title_cart from "./Componets/Title_cart/Title_cart";
import Mob from "./Componets/Mob/Mob";
import Cart from "./Componets/Cart/Cart";
import Cart_2 from "./Componets/Cart_2/Cart_2";
import Purchase from "./Componets/Purchase/Purchase";
import Coment from "./Componets/Coment/Coment";
import Subscribe from "./Componets/Subscribe/Subscribe";
import Foter from "./Componets/Foter/Foter";

const Home_Date = () => {
  return (
    <>
      <Heder />
      <Home />
      <Title_cart />
      <Mob />
      <Cart />
      <Cart_2 />
      <Purchase />
      <Coment />
      <Subscribe />
      <Foter />
    </>
  );
};

export default Home_Date;
