import React, { useEffect, useRef, useState } from "react";
import "./PrioritySelectOptionsDropdown.css";
import categoriesFilter from "../../assets/categoriesFilter";
import { useFilter } from "../../context/FilterContext";

function PrioritySelectOptionsDropdown({ selectFilter, filterType, index }) {
  const priorityFlagColors = {
    urgent: "#f50000",
    high: "rgb(255, 204, 0)",
    normal: "rgb(111, 221, 255)",
    low: "rgb(216, 216, 216)",
    "no priority": "#f7f7f7",
  };

  const [priorities, setPriorities] = useState({
    urgent: false,
    high: false,
    normal: false,
    low: false,
    "no priority": false,
  });

  const { filters, setFilters } = useFilter();

  const [isOpen, setIsOpen] = useState(false);

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleFilter = (select) => {
    setPriorities({ ...priorities, [select]: !priorities[select] });
    setFilters(
      filters.map((item) => {
        if (filters.indexOf(item) === index && filterType === "group") {
          return filters[index].map((items) => {
            if (items.id === selectFilter.id) {
              return {
                ...items,
                value: priorities,
              };
            }
            return items;
          });
        }
        if (item.id === selectFilter.id && filterType === "main") {
          return {
            ...item,
            value: priorities,
          };
        }
        return item;
      })
    );
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
    <div className="filter-date-title" ref={dropdownRef}>
      <div className="filter-value-add-dropdown">
        <div
          className="filter-value-add-droppdown-toggle"
          role="button"
          onClick={handleClickBtn}
        >
          <div className="filter-value-title-inner">
            {Object.keys(priorities).map((item) => {
              if (priorities[item]) {
                return (
                  <i
                    key={item}
                    className="fa fa-sharp fa-solid fa-flag fa-sm"
                    style={{
                      color: priorityFlagColors[item],
                      marginLeft: "5px",
                    }}
                  ></i>
                );
              }
            })}
            {!priorities["urgent"] &&
              !priorities["high"] &&
              !priorities["normal"] &&
              !priorities["low"] &&
              !priorities["no priority"] &&
              "Select Options"}
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
        <div className="priority-options-dropdown-menu">
          <div className="search-list">
            <div className="virtual-scroll-content-wrapper">
              <div className="priority-options-value-add-dropdown-list-container">
                {Object.keys(categoriesFilter[selectFilter?.name].value).map(
                  (item) => {
                    return (
                      <div
                        key={item}
                        className="priority-options-list-item"
                        type="button"
                        onClick={() => handleFilter(item)}
                      >
                        <div className="priority-list-item-icon">
                          <i
                            className="fa fa-sharp fa-solid fa-flag fa-sm"
                            style={{ color: priorityFlagColors[item] }}
                          ></i>
                        </div>
                        <div className="priority-list-item-name">{item}</div>
                        {priorities[item] && (
                          <div className="priority-list-item-check_icon">
                            <i
                              className="fa fa-sm fa-solid fa-check"
                              style={{ color: "#7b68ee" }}
                            ></i>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrioritySelectOptionsDropdown;
