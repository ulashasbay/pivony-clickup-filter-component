import React, { useEffect, useRef, useState } from "react";
import "./StatusSelectOptionsDropdown.css";
import { useFilter } from "../../context/FilterContext";

function StatusSelectOptionsDropdown({ selectFilter, index, filterType }) {
  const { filters, setFilters } = useFilter();

  const [isOpen, setIsOpen] = useState(false);

  const [activeChecked, setActiveChecked] = useState(false);
  const [doneChecked, setDoneChecked] = useState(false);

  const handleActiveChange = () => {
    setActiveChecked(!activeChecked);
    setFilters(
      filters.map((item) => {
        if (filters.indexOf(item) === index && filterType === "group") {
          return filters[index].map((items) => {
            if (items.id === selectFilter.id) {
              return {
                ...items,
                value: {
                  active: activeChecked,
                  done: doneChecked,
                },
              };
            }
            return items;
          });
        }
        if (item.id === selectFilter.id && filterType === "main") {
          return {
            ...item,
            value: {
              active: activeChecked,
              done: doneChecked,
            },
          };
        }
        return item;
      })
    );
  };

  const handleDoneChange = () => {
    setDoneChecked(!doneChecked);
    setFilters(
      filters.map((item) => {
        if (filters.indexOf(item) === index && filterType === "group") {
          return filters[index].map((items) => {
            if (items.id === selectFilter.id) {
              return {
                ...items,
                value: {
                  active: activeChecked,
                  done: doneChecked,
                },
              };
            }
            return items;
          });
        }
        if (item.id === selectFilter.id && filterType === "main") {
          return {
            ...item,
            value: {
              active: activeChecked,
              done: doneChecked,
            },
          };
        }
        return item;
      })
    );
  };

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleConfirm = () => {
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
            <div className="status-filter-type-block__container">
              {!activeChecked && !doneChecked && "Select Option"}
              {activeChecked && (
                <>
                  <div
                    className="status-filter-type-block__container-status"
                    style={{ width: "8px", height: "8px" }}
                  ></div>
                  <div
                    className="status-filter-type-block__container-status"
                    style={{
                      backgroundColor: "rgb(4, 169, 244)",
                      width: "8px",
                      height: "8px",
                      marginLeft: "8px",
                    }}
                  ></div>
                </>
              )}
              {doneChecked && (
                <div
                  className="status-filter-type-block__container-status"
                  style={{
                    backgroundColor: "rgb(46, 205, 111)",
                    width: "8px",
                    height: "8px",
                    marginLeft: "8px",
                  }}
                ></div>
              )}
            </div>
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
        <div className="status-options-dropdown-menu">
          <div className="search-list">
            <div
              className="search-input"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="status-options-search-input-inner">
                <input
                  type="text"
                  placeholder="Filter..."
                  className="status-options-serach-input__input"
                />
                <a className="status-options-select-all-btn">Select All</a>
                <i
                  className="fa fa-question-circle fa-xs"
                  style={{
                    color: "#b9bec7",
                    order: "4",
                    paddingTop: "2px",
                    marginLeft: "8px",
                  }}
                ></i>
                <div className="search-input-icon icon">
                  <i
                    className="fal fa-search fa-sm fa"
                    style={{ color: "#cccdde" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="status-filter-body">
              {/* Active Button */}
              <div className="status-filter-type-block">
                <div className="status-filter-type-block__inner">
                  <div
                    className="status-filter-type-checkbox-container"
                    onClick={handleActiveChange}
                  >
                    <input
                      type="status-checkbox"
                      className="checkbox__input"
                      disabled
                      style={{ margin: "-90px", background: "#fff" }}
                    />
                    <div className="status-checkbox-label">
                      <div className="status-checkbox-empty">
                        {activeChecked && (
                          <div className="status-checkbox-filled">""</div>
                        )}
                      </div>
                      Active
                    </div>
                  </div>
                  <div className="status-filter-type-block__toggle">
                    <div className="status-filter-type-block__container">
                      <div className="status-filter-type-block__container-status"></div>
                      <div
                        className="status-filter-type-block__container-status"
                        style={{ backgroundColor: "rgb(4, 169, 244)" }}
                      ></div>
                    </div>
                    <div className="status-filter-type-block__container-caret">
                      <i
                        className="fa fa-solid fa-caret-left"
                        style={{ color: "#d0d3d9" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* active button end */}
              {/* Done button */}
              <div className="status-filter-type-block">
                <div className="status-filter-type-block__inner">
                  <div
                    className="status-filter-type-checkbox-container"
                    onClick={handleDoneChange}
                  >
                    <input
                      type="status-checkbox"
                      className="checkbox__input"
                      disabled
                      style={{ margin: "-90px", background: "#fff" }}
                    />
                    <div className="status-checkbox-label">
                      <div className="status-checkbox-empty">
                        {doneChecked && (
                          <div className="status-checkbox-filled">""</div>
                        )}
                      </div>
                      Done
                    </div>
                  </div>
                  <div className="status-filter-type-block__toggle">
                    <div className="status-filter-type-block__container">
                      <div
                        className="status-filter-type-block__container-status"
                        style={{ backgroundColor: "rgb(46, 205, 111)" }}
                      ></div>
                    </div>
                    <div className="status-filter-type-block__container-caret">
                      <i
                        className="fa fa-solid fa-caret-left"
                        style={{ color: "#d0d3d9" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* Done Button end */}
            </div>
            {/* confirm btn */}
            <div className="status-filter__footer">
              <div
                className="status-filter-confirm-btn"
                onClick={handleConfirm}
              >
                Confirm
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatusSelectOptionsDropdown;
