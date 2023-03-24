import css from "./BlogBigContent.module.css";
import BigImgContent from "../../assets/differentImages/BigImgContent.png";

function BlogBigContent() {
  return (
    <div className={css.blogContent}>
      <div className={css.imageWrapper}></div>
      <div className={css.textImg + " container"}>
        <h1>
          Home {">"} Blog {">"}{" "}
          <a href="">The Complete Digital Marketing Course - 12 Courses in 1</a>
        </h1>
      </div>
      <hr />
    </div>
  );
}

export default BlogBigContent;
