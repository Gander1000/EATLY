import scss from "./Sign_up.module.scss";
import Hero from "../../assets/Hero.svg";
import Logo from "../../assets/Logo.svg";
import G from "../../assets/G.svg";
import { Link } from "react-router";
import User from "../../assets/User Icon.svg";
import Icon from "../../assets/Icon_a.svg";
import { useState } from "react";

function Sign_up() {
  const [inputs, setInputs] = useState({
    Fullname: "",
    Email: "",
    Password: "",
  });
  return (
    <section className={scss.Sign_up}>
      <div className={scss.left_container}>
        <Link className={scss.logo} to="/">
          <img src={Logo} alt="" />
        </Link>
        <h1>Sign Up To eatly</h1>
        <div className={scss.scaunt}>
          <button>
            <img src={G} alt="" />
          </button>
          <button>
            <img src={G} alt="" />
          </button>
        </div>
        <p>OR</p>
        <div
          className={`${scss.input_img} ${inputs.Fullname ? scss.active : ""}`}
        >
          <img src={User} alt="" />
          <input
            value={inputs.Fullname}
            onChange={(e) => setInputs({ ...inputs, Fullname: e.target.value })}
            placeholder="Full Name"
            type="text"
          />
        </div>
        <div className={`${scss.input_img} ${inputs.Email ? scss.active : ""}`}>
          <img src={User} alt="" />
          <input
            value={inputs.Email}
            onChange={(e) => setInputs({ ...inputs, Email: e.target.value })}
            placeholder="Email"
            type="text"
          />
        </div>
        <div
          className={`${scss.input_img} ${inputs.Password ? scss.active : ""}`}
        >
          <img src={User} alt="" />
          <input
            value={inputs.Password}
            onChange={(e) => setInputs({ ...inputs, Password: e.target.value })}
            placeholder="Password"
            type="text"
          />
          <img src={Icon} alt="" />
        </div>
        <button className={scss.sIGN}>SIGN UP</button>
        <p>
          Already Have An Account?<span>Log In</span>
        </p>
        <div className={scss.contai_foter_p}>
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </div>
      </div>
      <div className={scss.right_container}>
        <img src={Hero} alt="" />
        <h1>Find Foods With Love </h1>
        <span>
          Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
          Including Asian, Chinese, Italians And Many More. Our Dashboard Helps
          You To Manage Orders And Money.
        </span>
        <div className={scss.contai_iii}>
          <div className={scss.i_a}></div>
          <div className={scss.i}></div>
          <div className={scss.i}></div>
        </div>
      </div>
    </section>
  );
}

export default Sign_up;
