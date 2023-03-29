import css from "./MarketingTeam.module.css";
import pena1 from "../../assets/Team/test2.svg";
import pena2 from "../../assets/Team/test1.svg";
import pena3 from "../../assets/Team/pena.svg";
import pena4 from "../../assets/Team/test3.svg";
import pena5 from "../../assets/Team/test4.svg";
import pena6 from "../../assets/Team/test5.svg";
import pena7 from "../../assets/Team/test6.svg";
import pena8 from "../../assets/Team/ralph.svg";
import fbicon from "../../assets/Team/facebookicon.svg";
import insticon from "../../assets/Team/instagramicon.svg";
import inicon from "../../assets/Team/linkedinicon.svg";
import twiticon from "../../assets/Team/twittericon.svg";

function MarketingTeam() {
  return (
    <div className="container">
      <div className={css.teamPlace}>
        <h1>Great Team Is The Key</h1>
        <p>
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases
        </p>
        <div className={css.teamsContacts}>
          <div className={css.upContacts}>
            <div className={css.contact}>
              <img src={pena1} alt="" />
              <div className={css.block}>
                <img src={fbicon} alt="" />
                <img src={insticon} alt="" />
                <img src={inicon} alt="" />
                <img src={twiticon} alt="" />
              </div>
              <div className={css.names}>
                <h2>Eleanor Pena</h2>
                <strong>Marketing</strong>
              </div>
            </div>
            <div className={css.contact}>
              <img src={pena2} alt="" />
              <div className={css.block}>
                <img src={fbicon} alt="" />
                <img src={insticon} alt="" />
                <img src={inicon} alt="" />
                <img src={twiticon} alt="" />
              </div>
              <div className={css.names}>
                <h2>Eleanor Pena</h2>
                <strong>Marketing</strong>
              </div>
            </div>
            <div className={css.contact}>
              <img src={pena3} alt="" />
              <div className={css.block}>
                <img src={fbicon} alt="" />
                <img src={insticon} alt="" />
                <img src={inicon} alt="" />
                <img src={twiticon} alt="" />
              </div>
              <div className={css.names}>
                <h2>Eleanor Pena</h2>
                <strong>Marketing</strong>
              </div>
            </div>
            <div className={css.contact}>
              <img src={pena4} alt="" />
              <div className={css.block}>
                <img src={fbicon} alt="" />
                <img src={insticon} alt="" />
                <img src={inicon} alt="" />
                <img src={twiticon} alt="" />
              </div>
              <div className={css.names}>
                <h2>Eleanor Pena</h2>
                <strong>Marketing</strong>
              </div>
            </div>
          </div>
          <div className={css.bottomContacts}>
            <div className={css.contact}>
              <img src={pena5} alt="" />
              <div className={css.block}>
                <img src={fbicon} alt="" />
                <img src={insticon} alt="" />
                <img src={inicon} alt="" />
                <img src={twiticon} alt="" />
              </div>
              <div className={css.names}>
                <h2>Eleanor Pena</h2>
                <strong>Marketing</strong>
              </div>
            </div>
            <div className={css.contact}>
              <img src={pena6} alt="" />
              <div className={css.block}>
                <img src={fbicon} alt="" />
                <img src={insticon} alt="" />
                <img src={inicon} alt="" />
                <img src={twiticon} alt="" />
              </div>
              <div className={css.names}>
                <h2>Eleanor Pena</h2>
                <strong>Marketing</strong>
              </div>
            </div>
            <div className={css.contact}>
              <img src={pena8} alt="" />
              <div className={css.block}>
                <img src={fbicon} alt="" />
                <img src={insticon} alt="" />
                <img src={inicon} alt="" />
                <img src={twiticon} alt="" />
              </div>
              <div className={css.names}>
                <h2>Eleanor Pena</h2>
                <strong>Marketing</strong>
              </div>
            </div>
            <div className={css.contact}>
              <img src={pena7} alt="" />
              <div className={css.block}>
                <img src={fbicon} alt="" />
                <img src={insticon} alt="" />
                <img src={inicon} alt="" />
                <img src={twiticon} alt="" />
              </div>
              <div className={css.names}>
                <h2>Eleanor Pena</h2>
                <strong>Marketing</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingTeam;
