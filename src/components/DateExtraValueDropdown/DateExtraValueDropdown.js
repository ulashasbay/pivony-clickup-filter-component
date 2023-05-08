import React, { useEffect, useRef, useState } from "react";
import "./DateExtraValueDropdown.css";
import categoriesFilter from "../../assets/categoriesFilter";
import { useFilter } from "../../context/FilterContext";

function DateExtraValueDropdown({ selectFilter, index, filterType }) {
  const [extra, setExtra] = useState(
    categoriesFilter[selectFilter?.name].extra[0]
  );

  const { filters } = useFilter();

  const [isOpen, setIsOpen] = useState(false);

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleFilter = (select) => {
    setExtra(select);
    setIsOpen(!isOpen);
  };

  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[]);
  return (
    <div
      className="date-extra-value-filter-operator-title"
      style={{ maxWidth: "100%" }}
      ref={dropdownRef}
    >
      <div className="date-extra-value-filter-value-add-dropdown">
        <div
          className="date-extra-value-filter-value-add-droppdown-toggle"
          role="button"
          onClick={handleClickBtn}
        >
          <div className="date-extra-value-filter-value-title-inner">
            {extra}
          </div>
          <div className="date-extra-value-filter-value-add-droppdown-toggle-arrow icon">
            <i
              className={
                isOpen
                  ? "fa-sharp fa-light fa-chevron-down fa-xs fa fa-rotate-180"
                  : "fa-sharp fa-light fa-chevron-down fa-xs fa"
              }
              style={{ color: "#4f5762" }}
            ></i>
          </div>
        </div>

        {isOpen && (
          <div className="date-extra-value-dropdown-menu">
            <div className="date-extra-value-search-list">
              <div className="date-extra-value-virtual-scroll-content-wrapper">
                <div className="date-extra-value-filter-value-add-dropdown-list-container">
                  {categoriesFilter[selectFilter?.name].extra.map((item) => {
                    return (
                      <div
                        key={item}
                        className="date-extra-value-filter-value-add-dropdown-list-item"
                        type="button"
                        onClick={() => handleFilter(item)}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateExtraValueDropdown;
