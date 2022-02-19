import React from "react";
import "./Cateogory.css";
import { CateogoriesData } from "../../data/CateogoriesData";

function Cateogory() {
  const data = CateogoriesData;

  return (
    <div className="container">
      <h4 className="desc">Popular categories</h4>
      <div className="line">
        <div className="line_posters">
          {data.map((item) => {
            return (
              <div className="line_poster">
                <img
                  key={item.id}
                  src={item.image}
                  alt="Icon"
                  className="item_image"
                />
                <p className="item_name">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cateogory;
