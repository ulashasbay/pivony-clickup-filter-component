import React, { useEffect, useRef, useState } from "react";
import "./DateExtraFilters.css";
import categoriesFilter from "../../assets/categoriesFilter";
import { useFilter } from "../../context/FilterContext";
import DateExtraValueDropdown from "../DateExtraValueDropdown/DateExtraValueDropdown";

function DateExtraFilters({ selectFilter, index, filterType }) {
  const { filters, setFilters } = useFilter();

  const [extraValue, setExtraValue] = useState(1);

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
                value: select,
              };
            }
            return items;
          });
        }
        if (item.id === selectFilter.id && filterType === "main") {
          return {
            ...item,
            value: select,
          };
        }
        return item;
      })
    );
    console.log(filters);
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
    <div className="date-extra-value-dropdown">
      <div className="date-ext-filter">
        <div className="filter-extra-date-title" ref={dropdownRef}>
          <div className="date-extra-filter-value-add-dropdown">
            <div
              className="date-extra-filter-value-add-droppdown-toggle"
              role="button"
              onClick={handleClickBtn}
            >
              <div className="date-extra-filter-value-title-inner">
                {selectFilter?.value}
              </div>
              <div className="date-extra-filter-value-add-droppdown-toggle-arrow icon">
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
            <div className="date-extra-date-dropdown-menu">
              <div className="date-extra-search-list">
                <div className="date-extra-search-input">
                  <div className="date-extra-date-search-input-inner">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="date-extra-serach-input__input"
                    />
                    <div className="date-extra-search-input-icon icon">
                      <i
                        className="fal fa-search fa-sm fa"
                        style={{ color: "#cccdde" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="date-extra-virtual-scroll-content-wrapper">
                  <div className="date-extra-filter-value-add-dropdown-list-container">
                    {categoriesFilter[selectFilter?.name].value.map((item) => {
                      return (
                        <div
                          key={item}
                          className="date-extra-filter-value-add-dropdown-list-item"
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
        <div className="date-ext-filter__container">
          <div className="date-ext-input-filter">
            <input
              type="text"
              className="date-ext-input-filter__input"
              value={extraValue}
              onChange={(e) => setExtraValue(e.target.value)}
            />
          </div>
          <DateExtraValueDropdown
            selectFilter={selectFilter}
            index={index}
            filterType={filterType}
          />
        </div>
      </div>
    </div>
  );
}

export default DateExtraFilters;
