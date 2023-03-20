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
          <ul>
            <li>
              <img src={dot} />
              First Class Flights
            </li>
            <li>
              <img src={dot} />5 Star Accommodations
            </li>
            <li>
              <img src={dot} />
              Inclusive Packages
            </li>
            <li>
              <img src={dot} />
              Latest Model Vehicles
            </li>
          </ul>
          <button>Check Our Work →</button>
        </div>
      </div>
    </div>
  );
}

export default OfflineSeo;
