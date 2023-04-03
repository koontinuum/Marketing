import React from "react";
import { ItemData } from "../../SlidersItems";
import SlidersCard from "../SlidersCard/SlidersCard";
import css from "./SlidersList.module.css";
import search from "../../assets/SlidersList/search.svg";
import posts1 from "../../assets/SlidersList/posts1.svg";
import posts2 from "../../assets/SlidersList/posts2.svg";
import posts3 from "../../assets/SlidersList/posts3.svg";
import posts4 from "../../assets/SlidersList/posts4.svg";
import advertisement from "../../assets/SlidersList/advertisement.svg";
import ellips16 from "../../assets/SlidersList/ellipse16.svg";

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
        <div className={css.listRight}>
          <div className={css.search}>
            <img src={search} alt="" />
            <input type="text" placeholder="Search..." />
          </div>

          <div className={css.categories}>
            <h4>Categories</h4>
            <ul>
              <li>Marketing</li>
              <li>Community</li>
              <li>Tutorials</li>
              <li>Business</li>
              <li>Management</li>
            </ul>
          </div>

          <div className={css.recent}>
            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={posts1} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>
                  Understanding color theory: the color wheel and finding...
                </h5>
                <p>
                  November 7, 2017 <img src={ellips16} alt="" /> 8 min read
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={posts2} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>
                  Understanding color theory: the color wheel and finding...
                </h5>
                <p>
                  November 7, 2017 <img src={ellips16} alt="" /> 8 min read
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={posts3} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>
                  Understanding color theory: the color wheel and finding...
                </h5>
                <p>
                  November 7, 2017 <img src={ellips16} alt="" /> 8 min read
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={posts4} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>
                  Understanding color theory: the color wheel and finding...
                </h5>
                <p>
                  November 7, 2017 <img src={ellips16} alt="" /> 8 min read
                </p>
              </div>
            </div>
          </div>

          <div className={css.tags}>
            <h4>Popular Tags</h4>
            <div className={css.popular}>
              <div>Marketing</div>
              <div>Development</div>
              <div>Banking</div>
              <div>HR & Recruting</div>
              <div>Design</div>
              <div>Management</div>
              <div>Business</div>
              <div>Community</div>
              <div>Tutorials</div>
            </div>
          </div>

          <div className={css.advertisement}>
            <div>
             
              <h4>Advertisement</h4>
              <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
              <div className={css.advertisementBtn}>Go Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlidersList;
