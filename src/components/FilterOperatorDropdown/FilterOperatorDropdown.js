import React, { useEffect, useRef, useState } from "react";
import "./FilterOperatorDropdown.css";
import categoriesFilter from "../../assets/categoriesFilter";
import { useFilter } from "../../context/FilterContext";

function FilterOperatorDropdown({ selectFilter, index, filterType }) {
  const { filters, setFilters, maxwidth } = useFilter();

  const [isOpen, setIsOpen] = useState(false);

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleFilter = (select) => {
    setFilters(
      filters.map((item) => {
        if (filters.indexOf(item) === index && filterType === "group") {
          return filters[index].map((items) => {
            if (items.id === selectFilter.id) {
              return {
                ...items,
                type: select,
              };
            }
            return items;
          });
        }
        if (item.id === selectFilter.id && filterType === "main") {
          return {
            ...item,
            type: select,
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
  });
  return (
    <div
      className="filter-operator-title"
      style={
        maxwidth.includes(selectFilter.type)
          ? { maxWidth: "17.5%" }
          : { maxWidth: "100%" }
      }
      ref={dropdownRef}
    >
      <div className="filter-value-add-dropdown">
        <div
          className="filter-value-add-droppdown-toggle"
          role="button"
          onClick={handleClickBtn}
        >
          <div className="filter-value-title-inner">{selectFilter?.type}</div>
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
        <div className="dropdown-menu">
          <div className="search-list">
            <div className="virtual-scroll-content-wrapper">
              <div className="filter-value-add-dropdown-list-container">
                {categoriesFilter[selectFilter?.name].type.map((item) => {
                  return (
                    <div
                      key={item}
                      className="filter-value-add-dropdown-list-item"
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
  );
}

export default FilterOperatorDropdown;
