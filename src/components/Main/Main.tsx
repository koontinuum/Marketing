import css from "./Main.module.css";
import clickicon from "../../assets/mainLogo/click.svg";
import rightContent from "../../assets/mainLogo/rightContent.svg";

function Main() {
  return (
    <div className="container">
      <div className={css.main}>
        <div className={css.mainLeft}>
          <h2>Digital Marketing</h2>
          <h1>Boosts Your Website Traffic</h1>
          <p>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros.
          </p>
          <div className={css.leftbtn}>
            <button>Try For Free</button>
            <img src={clickicon} alt="" />
            <h1>See Our Work</h1>
          </div>
        </div>
        <div className={css.mainRight}>
          <img src={rightContent} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
