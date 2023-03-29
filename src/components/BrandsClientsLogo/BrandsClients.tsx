import css from "./BrandsClients.module.css";
import brand1 from "../../assets/differentImages/brand1.svg";
import brand2 from "../../assets/differentImages/brand2.svg";
import brand3 from "../../assets/differentImages/brand3.svg";
import brand4 from "../../assets/differentImages/brand4.svg";
import brand5 from "../../assets/differentImages/brand5.svg";
import brand6 from "../../assets/differentImages/brand6.svg";
import brand7 from "../../assets/differentImages/brand7.svg";
import brand8 from "../../assets/differentImages/brand8.svg";

function BrandsClients() {
  return (
    <div className="container">
      <div className={css.main}>
        <h1>Our Clients</h1>
        <div className={css.mainbrands}>
          <div className={css.up}>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
          </div>
          <div className={css.bottom}>
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandsClients;
