import React from "react";
import css from "./Main.module.css";

function Main() {
  return (
    <div className={css.main}>
      <div className={css.left}>
        <h2>Digital Marketing</h2>
        <h1>Boosts Your Website Traffic</h1>
        <p>
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
          sapien, quis venenatis ante odio sit amet eros.
        </p>
      </div>
      <div className={css.right}></div>
    </div>
  );
}

export default Main;
