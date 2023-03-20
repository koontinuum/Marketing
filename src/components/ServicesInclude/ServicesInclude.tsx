import css from "./ServicesInclude.module.css";
import sIcon1 from "../../assets/servicesImg/sIcon1.svg";
import sIcon2 from "../../assets/servicesImg/sIcon2.svg";
import sIcon3 from "../../assets/servicesImg/sIcon3.svg";
import sIcon4 from "../../assets/servicesImg/sIcon4.svg";
import sIcon5 from "../../assets/servicesImg/sIcon5.svg";
import sIcon6 from "../../assets/servicesImg/sIcon6.svg";

function ServicesInclude() {
  return (
    <div className="container">
      <div className={css.servicesMenu}>
        <h1>Services Include</h1>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
        <div className={css.mainContent}>
          <div>
            <img src={sIcon1} alt="" />
            <h1>Search Engine Optimization</h1>
            <p>
              Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
              nisi.
            </p>
          </div>
          <div>
            <img src={sIcon2} alt="" />
            <h1>Social Media Strategy</h1>
            <p>
              Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
              nisi.
            </p>
          </div>
          <div>
            <img src={sIcon3} alt="" />
            <h1>Real Time and Data</h1>
            <p>
              Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
              nisi.
            </p>
          </div>
          <div>
            <img src={sIcon4} alt="" />
            <h1>Online Media Management</h1>
            <p>
              Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
              nisi.
            </p>
          </div>
          <div>
            <img src={sIcon5} alt="" />
            <h1>Reporting & Analysis</h1>
            <p>
              Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
              nisi.
            </p>
          </div>
          <div>
            <img src={sIcon6} alt="" />
            <h1>Penalty Recovery</h1>
            <p>
              Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
              nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesInclude;
