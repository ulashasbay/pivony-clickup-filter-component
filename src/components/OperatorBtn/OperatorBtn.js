import React from "react";
import "./OperatorBtn.css";

function OperatorBtn({ selectFilter, text, handleOperatorBtn, filter }) {
  return (
    <div className="filter-group-op">
      {filter?.indexOf(selectFilter) == "1" && (
        <div className="filter-group-op-item">Where</div>
      )}
      {filter?.indexOf(selectFilter) == "2" && (
        <div className="filter-group-op-item">
          <div className="filter-group-op-item__btn-container">
            <button
              className="filter-group-op-item__btn"
              onClick={handleOperatorBtn}
            >
              {text}
              <i
                className="fa-solid fa-sort fa fa-xs"
                style={{ color: "#87909e", marginLeft: "2px" }}
              ></i>
            </button>
          </div>
        </div>
      )}
      {filter?.indexOf(selectFilter) > 2 && (
        <div className="filter-group-op-item">
          <div className="filter-group-op-item__btn-container-disabled">
            <button className="filter-group-op-item__btn-disabled" disabled>
              {text}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OperatorBtn;
