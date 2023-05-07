import React, { useEffect, useRef, useState } from "react";
import "./SelectTagsOptionsDropdown.css";

function SelectTagsOptionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBtn = () => {
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
  });

  return (
    <div className="filter-date-title" ref={dropdownRef}>
      <div className="filter-value-add-dropdown">
        <div
          className="filter-value-add-droppdown-toggle"
          role="button"
          onClick={handleClickBtn}
        >
          <div className="tags-option-value-title-inner">
            <i
              className="fa fa-light fa-tags"
              style={{ color: "#2a2e34", marginRight: "12px" }}
            ></i>
            Select Option
          </div>
          <div className="filter-value-add-droppdown-toggle-arrow icon">
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
      </div>
      {isOpen && (
        <div className="tags-option-dropdown-menu">
          <div className="search-list">
            <div className="search-input">
              <div className="date-search-input-inner">
                <input
                  type="text"
                  placeholder="Search Tags"
                  className="serach-input__input"
                />
              </div>
            </div>
            <div className="virtual-scroll-content-wrapper">
              <div className="filter-value-add-dropdown-list-container">
                <div className="tags-option-value-add-dropdown-list-item">
                  No Tags Created
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectTagsOptionsDropdown;
