import CasePage from "../../Pages/CasePage/CasePage";
import css from "./Categories.module.css";

function Categories() {
  return (
    <div className="container">
      <div className={css.content}>
        <div className={css.leftContent}>
          <CasePage />
        </div>
        <div className={css.rightContent}></div>
      </div>
    </div>
  );
}

export default Categories;
