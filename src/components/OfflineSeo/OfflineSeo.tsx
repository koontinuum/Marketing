import css from "./OfflineSeo.module.css";
import SeoImg from "../../assets/differentImages/SeoImg.svg";
import dot from "../../assets/differentImages/EllipseSeo.svg";

function OfflineSeo() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.left}>
          <img src={SeoImg} alt="" />
        </div>
        <div className={css.right}>
          <h1>Offline SEO</h1>
          <p>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
            suscipit non, turpis. Nunc nonummy metus. Donec elit libero, sodales
            nec
          </p>
          <ul className={css.dotsUl}>
            <li>
              <h1>First Class Flights</h1>
            </li>
            <li>
              <h1>5 Star Accommodations</h1>
            </li>
            <li>
              <h1>Inclusive Packages</h1>
            </li>
            <li>
              <h1>Latest Model Vehicles</h1>
            </li>
          </ul>
          <button>Check Our Work →</button>
        </div>
      </div>
    </div>
  );
}

export default OfflineSeo;
