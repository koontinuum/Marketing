import css from "./PlaceMainText.module.css";
import ic_quotes from "../../assets/differentImages/ic_quotes.svg";
import socialPlaceImg1 from "../../assets/differentImages/socialPlaceImg1.png";
import facebookIcon from "../../assets/differentImages/facebookIcon.svg";
import instagramIcon from "../../assets/differentImages/instagramIcon.svg";
import linkedinIcon from "../../assets/differentImages/linkedinIcon.svg";
import twitterIcon from "../../assets/differentImages/twitterIcon.svg";
import avatar from "../../assets/testimonialsSlide/avatar.svg";

function PlaceMainText() {
  return (
    <div className="socialPlaceContainer">
      <div className={css.socialText}>
        <div className={css.up}>
          <h1>Curabitur suscipit suscipit tellus</h1>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
        </div>
        <div className={css.bottom}>
          <h1>Nullam accumsan lorem in</h1>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
        </div>
      </div>
      <div className={css.socialMainText}>
        <img src={ic_quotes} alt="" />
        <h1>
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo.
        </h1>
      </div>
      <img src={socialPlaceImg1} alt="" />
      <div className={css.socialMainText1}>
        <p>
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
        </p>
        <p>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
        </p>
        <p>
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
        </p>
      </div>
      <div className={css.tags}>
        tags: <button>Marketing</button>
        <button>Development</button>
        <button>HR & Recruting</button>
        <button>Design</button>
        <button>Management</button>
      </div>
      <div className={css.shares}>
        share:
        <button className={css.firstShare}>
          <img src={facebookIcon} alt="" />
          Facebook
        </button>
        <button className={css.secondShare}>
          <img src={instagramIcon} alt="" />
          Instagram
        </button>
        <button className={css.thirdShare}>
          <img src={linkedinIcon} alt="" />
          LinkedIn
        </button>
        <button className={css.fourthShare}>
          <img src={twitterIcon} alt="" />
          Twitter
        </button>
      </div>
      <hr className={css.hr} />
      <div className={css.infoCourtney}>
        <div className={css.left}>
          <img src={avatar} alt="" />
        </div>
        <div className={css.right}>
          <div className={css.rup}>
            <div className={css.rinfo}>
              <h1>Courtney Henry</h1>
              <p>Curator of Marketing Course</p>
            </div>
            <div className={css.links}>
              <a href="">
                <img src={facebookIcon} alt="" />
              </a>
              <a href="">
                <img src={instagramIcon} alt="" />
              </a>
              <a href="">
                <img src={linkedinIcon} alt="" />
              </a>
              <a href="">
                <img src={twitterIcon} alt="" />
              </a>
            </div>
          </div>
          <div className={css.rbottom}>
            <p>
              Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem..
            </p>
            <b>Member since Mar 15, 2021</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceMainText;
