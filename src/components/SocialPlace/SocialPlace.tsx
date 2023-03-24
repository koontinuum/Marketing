import css from "./SocialPlace.module.css";
import avatar from "../../assets/testimonialsSlide/avatar.svg";
import socc from "../../assets/differentImages/socc.svg";
import like from "../../assets/differentImages/like.svg";
import socialPlaceImg from "../../assets/differentImages/socialPlaceImg.png";
function SocialPlace() {
  return (
    <div className="socialPlaceContainer">
      <div className={css.mainText}>
        <b>8 minutes read</b>
        <h1>The Complete Digital Marketing Course - 12 Courses in 1</h1>
        <p>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
        </p>
      </div>
      <hr className={css.soccHr} />
      <div className={css.accInfo}>
        <div className={css.accLeft}>
          <img src={avatar} alt="" />
          <h1>
            Jane Cooper
            <p>February 28, 2018</p>
          </h1>
        </div>
        <div className={css.accRight}>
          <img src={socc} alt="" />
          <img src={like} alt="" />
        </div>
      </div>
      <hr className={css.soccHr} />
      <div className={css.secondText}>
        <div className={css.left}>
          <h1>P</h1>
        </div>
        <div className={css.right}>
          <p>
            ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
            venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
        </div>
      </div>
      <p className={css.seccBottomText}>
        Donec posuere vulputate arcu. Quisque rutrum.
      </p>
      <div className={css.seccFullBottomText}>
        <p>
          Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit
          quam. Vestibulum ullamcorper mauris at ligula.
        </p>
        <p>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh
        </p>
      </div>
      <img src={socialPlaceImg} alt="" />
    </div>
  );
}

export default SocialPlace;
