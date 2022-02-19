import React from "react";
import "./Cities.css";
import { CitiesData } from "../../data/CitiesData";

function Cities() {
  const data = CitiesData;

  return (
    <div className="container mt-5">
      <h4 className="desc">Popular cities</h4>
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

export default Cities;
