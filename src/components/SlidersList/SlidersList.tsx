import React from "react";
import { ItemData } from "../../SlidersItems";
import SlidersCard from "../SlidersCard/SlidersCard";
import css from "./SlidersList.module.css";

function SlidersList() {
  // console.log(ItemData);

  return (
    <div className="container">
      <div className={css.slidersList}>
        <div className={css.listLeft}>
          {ItemData.map((el) => (
            <SlidersCard {...el} key={el.id} />
          ))}
        </div>
        <div className={css.listRight}></div>
      </div>
    </div>
  );
}

export default SlidersList;
