import scss from "./Contact.module.scss";
import Left from "../../assets/Left.svg";
import Mobile from "../../assets/Mobile_a.svg";
import Arrow from "../../assets/Arrow_a.svg";

function Contact () {
    return (
      <section className={scss.Contact}>
        <div className={scss.contai_Left}>
          <img src={Left} alt="" />
          <img className={scss.Mobile} src={Mobile} alt="" />
        </div>
        <div className={scss.contai_input}>
          <h1>
            Customer <span>Support</span>
          </h1>
          <input type="text" placeholder="full name" />
          <input type="text" placeholder="enter your email " />
          <input className={scss.input_box} type="text" placeholder="Enter The Problem Or Query " />
          <button>send now</button>
        </div>
      </section>
    );
}

export default Contact;