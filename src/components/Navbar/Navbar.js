import React from "react";
import "./Navbar.css";
import { useFilter } from "../../context/FilterContext";

function Navbar({ handleClickFilterBtn }) {
  const { isFilterMenuOpen } = useFilter();

  return (
    <div className="navbar-container">
      <div
        style={{ height: "50px", borderBottom: "1px solid rgb(232, 234, 237)" }}
      ></div>
      <div className="navbar-body">
        <div className="navbar-filter-block">
          <div className="navbar-filter-block__filter-btn-container">
            <div className="navbar-filter-block__filter-body" style={{backgroundColor: isFilterMenuOpen ? "rgb(232, 234, 237)" : "#fff"}}>
              <button
                className="navbar-filter-block__filter-btn"
                onClick={handleClickFilterBtn}
              >
                <i
                  className="fa fa-regular fa-bars fa-xs"
                  style={{ color: "#656f7d", marginRight: "4px" }}
                ></i>
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
