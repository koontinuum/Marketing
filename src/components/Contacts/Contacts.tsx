import css from "./Contacts.module.css";
import mainImg from "../../assets/contactsImages/contactsimg.svg";
import gpsicon from "../../assets/contactsImages/gpsicon.svg";
import messageicon from "../../assets/contactsImages/messageicon.svg";
import phoneicon from "../../assets/contactsImages/phoneicon.svg";
import timeicon from "../../assets/contactsImages/timeicon.svg";
import linkedicon from "../../assets/contactsImages/linkedicon.svg";

function Contacts() {
  return (
    <div className="container">
      <div className={css.main}>
        <div className={css.left}>
          <img src={mainImg} alt="" />
          <div className={css.networks}>
            <img src={gpsicon} alt="" />
            <h1>
              <h2>
                Visit is <img src={linkedicon} alt="" />
              </h2>
              <a href="">508 Bridle Avenue Newnan, GA 30263</a>
            </h1>
          </div>
          <div className={css.networks}>
            <img src={phoneicon} alt="" />
            <h1>
              Call us
              <a href="">(319) 555-0115</a>
            </h1>
          </div>
          <div className={css.networks}>
            <img src={messageicon} alt="" />
            <h1>
              Talk to us
              <a href="">hello@example.com</a>
            </h1>
          </div>
          <div className={css.networks}>
            <img src={timeicon} alt="" />
            <h1>
              Working Hours
              <a href="">Mon-Fri: 9 am — 6 pm</a>
            </h1>
          </div>
        </div>
        <div className={css.right}>
          <h1>Ready To Get Started?</h1>
          <b>Services</b>
          <div className={css.rightbuttons}>
            <button className={css.btn1}>Email marketing</button>
            <button className={css.btn2}>SEO</button>
            <button className={css.btn3}>Social Marketing</button>
            <button className={css.btn4}>Research</button>
          </div>
          <div className={css.rightinputs}>
            <div className={css.inputs1}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={css.inputs2}>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone number" />
            </div>
            <div className={css.inputs1}>
              <input type="text" placeholder="Compnany" />
              <input type="text" placeholder="Website" />
            </div>
            <div className={css.inputs3}>
              <textarea placeholder="Message"></textarea>
              <button>Send Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
