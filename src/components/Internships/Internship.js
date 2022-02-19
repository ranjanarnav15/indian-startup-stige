import React from "react";
import "./Internship.css";

function Internship({ title, subtitle, word, href }) {
  return (
    <div className="internship container mt-4">
      <div className="left">
        <h3 className="title">{title}</h3>
        <h5 className="desc">{subtitle}</h5>
      </div>
      <div className="right">
        <h6 className="view">
          <a href={href} target="_blank">
            View all {word} <i class="fas fa-long-arrow-alt-right"></i>
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Internship;
