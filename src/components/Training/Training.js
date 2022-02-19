import React from "react";
import "./Training.css";
import { TrainingData } from "../../data/TrainingData";

function Training() {
  const data = TrainingData;
  return (
    <div className="container">
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
      <span className="spanfiftytwo">& 52 more...</span>
    </div>
  );
}

export default Training;
