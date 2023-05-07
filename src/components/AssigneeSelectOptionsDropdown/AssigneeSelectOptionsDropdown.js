import React, { useEffect, useRef, useState } from "react";
import "./AssigneeSelectOptionsDropdown.css";
import categoriesFilter from "../../assets/categoriesFilter";
import { useFilter } from "../../context/FilterContext";

function AssigneeSelectOptionsDropdown({ selectFilter, filterType, index }) {
  const { filters, setFilters } = useFilter();

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
          <div className="filter-value-title-inner">
            {selectFilter?.value !== "Me" &&
              selectFilter?.value !== "Unassigned" && (
                <div>
                  <i
                    className="fa fa-user-o fa-md"
                    style={{ color: "#000000" }}
                  ></i>{" "}
                  <span style={{ marginLeft: "5px" }}>
                    Select
                    {selectFilter.name === "Assignee" && " Assignee"}
                    {selectFilter.name === "Created by" && " Creator"}
                    {selectFilter.name === "Watcher" && " Watcher"}
                  </span>
                </div>
              )}
            {selectFilter?.value == "Me" && (
              <div
                className="assignee-list-item-icon"
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "orange",
                }}
              >
                <i
                  className=" fa fa-solid fa-users"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            )}
            {selectFilter?.value == "Unassigned" && (
              <div
                className="assignee-list-item-icon"
                style={{ width: "24px", height: "24px" }}
              >
                <i
                  className=" fa fa-solid fa-users"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            )}
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
        <div className="assignee-dropdown-menu">
          <div className="search-list">
            <div className="search-input">
              <div className="assignee-search-input-inner">
                <input
                  type="text"
                  placeholder="Search..."
                  className="serach-input__input"
                />
                <div className="search-input-icon icon">
                  <i
                    className="fal fa-search fa-sm fa"
                    style={{ color: "#cccdde" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="assignee-content-wrapper">
              <div className="assignee-dropdown-list-container">
                {categoriesFilter[selectFilter?.name].value.map((item) => {
                  return (
                    <div
                      key={item}
                      className="assignee-list-item"
                      type="button"
                      onClick={() => handleFilter(item)}
                    >
                      {item == "Unassigned" && (
                        <div className="assignee-list-item-icon">
                          <i
                            className=" fa fa-solid fa-users"
                            style={{ color: "#ffffff" }}
                          ></i>
                        </div>
                      )}

                      {item == "Me" && (
                        <div
                          className="assignee-list-item-icon"
                          style={{ backgroundColor: "orange" }}
                        >
                          <i
                            className=" fa fa-solid fa-users"
                            style={{ color: "#ffffff" }}
                          ></i>
                        </div>
                      )}
                      <div className="assignee-list-item-name">{item}</div>
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

export default AssigneeSelectOptionsDropdown;
