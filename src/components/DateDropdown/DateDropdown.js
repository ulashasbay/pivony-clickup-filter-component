import React, { useEffect, useRef, useState } from "react";
import "./DateDropdown.css";
import categoriesFilter from "../../assets/categoriesFilter";
import { useFilter } from "../../context/FilterContext";

function DateDropdown({ selectFilter, index, filterType }) {
  const { filters, setFilters } = useFilter();

  const [isOpen, setIsOpen] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
    setSearchTerm("");
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
    setIsOpen(!isOpen);
  };

  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[]);

  useEffect(() => {
    const filteredTags = categoriesFilter[selectFilter?.name].value.filter(
      (item) => item?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredTags);
  },[searchTerm]);

  return (
    <div className="filter-date-title" ref={dropdownRef}>
      <div className="filter-value-add-dropdown">
        <div
          className="filter-value-add-droppdown-toggle"
          role="button"
          onClick={handleClickBtn}
        >
          <div className="filter-value-title-inner">{selectFilter?.value}</div>
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
        <div className="date-dropdown-menu">
          <div className="search-list">
            <div className="search-input">
              <div className="date-search-input-inner">
                <input
                  type="text"
                  placeholder="Search..."
                  className="serach-input__input"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="search-input-icon icon">
                  <i
                    className="fal fa-search fa-sm fa"
                    style={{ color: "#cccdde" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="virtual-scroll-content-wrapper">
              <div className="filter-value-add-dropdown-list-container">
                {filteredData.map((item) => {
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

export default DateDropdown;
