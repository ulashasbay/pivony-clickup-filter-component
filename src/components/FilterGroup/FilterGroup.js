import React from "react";
import SelectFilterDropdown from "../SelectFilterDropdown/SelectFilterDropdown";
import { useFilter } from "../../context/FilterContext";
import DateFilters from "../DateFilters/DateFilters";
import TagsFilter from "../TagsFilter/TagsFilter";
import StatusFilter from "../StatusFilter/StatusFilter";
import PriorityFilter from "../PriorityFilter/PriorityFilter";
import AssigneeFilter from "../AssigneeFilter/AssigneeFilter";
import { v4 as uuidv4 } from "uuid";
import "./FilterGroup.css";
import OperatorBtn from "../OperatorBtn/OperatorBtn";

function FilterGroup({ selectFilter, index }) {
  const assigneeFilters = ["Assignee", "Created by", "Watcher"];
  const priorityFilters = ["Priority", "Archived", "Assigned comment"];
  const dateFilters = [
    "Due Date",
    "Date closed",
    "Date created",
    "Date updated",
  ];

  const { filters, setFilters } = useFilter();

  const handleOperatorBtn = () => {
    setFilters(
      filters?.map((item) => {
        if (filters.indexOf(item) === 0) {
          if (item === "AND") {
            return "OR";
          }
          if (item === "OR") {
            return "AND";
          }
        }
        return item;
      })
    );
  };

  const handleGroupOperatorBtn = () => {
    setFilters(
      filters.map((item) => {
        if (filters.indexOf(item) === index) {
          return filters[index].map((items) => {
            if (filters[index].indexOf(items) === 0) {
              if (items === "AND") {
                return "OR";
              }
              if (items === "OR") {
                return "AND";
              }
            }
            return items;
          });
        }
        return item;
      })
    );
  };

  const handleTrash = () => {
    setFilters(
      filters.filter((item) => {
        return item.id !== selectFilter.id;
      })
    );
  };

  const handleClearGroup = () => {
    setFilters(
      filters.filter((item) => {
        return filters.indexOf(item) !== index;
      })
    );
  };

  const handleGroupFilterTrash = (select) => {
    if (filters[index].length === 2) {
      handleClearGroup();
    } else {
      setFilters(
        filters.map((item) => {
          if (filters.indexOf(item) === index) {
            return filters[index].filter((item) => {
              return item.id !== select.id;
            });
          }
          return item;
        })
      );
    }
  };

  const handleAddFilter = () => {
    setFilters(
      filters.map((item) => {
        if (filters.indexOf(item) === index) {
          return [...filters[index], { id: uuidv4(), name: "Select Filter" }];
        }
        return item;
      })
    );
  };
  return (
    <React.Fragment key={selectFilter.id}>
      {!Array.isArray(selectFilter) && typeof selectFilter !== "string" && (
        <>
          <OperatorBtn
            filter={filters}
            selectFilter={selectFilter}
            text={filters[0]}
            handleOperatorBtn={handleOperatorBtn}
          />

          <div className="filter-value">
            <SelectFilterDropdown
              selectFilter={selectFilter}
              filterType={"main"}
            />
            {dateFilters.includes(selectFilter.name) && (
              <DateFilters selectFilter={selectFilter} filterType={"main"} />
            )}
            {selectFilter.name === "Tags" && (
              <TagsFilter selectFilter={selectFilter} filterType={"main"} />
            )}
            {selectFilter.name === "Status" && (
              <StatusFilter selectFilter={selectFilter} filterType={"main"} />
            )}
            {priorityFilters.includes(selectFilter.name) && (
              <PriorityFilter selectFilter={selectFilter} filterType={"main"} />
            )}
            {assigneeFilters.includes(selectFilter.name) && (
              <AssigneeFilter selectFilter={selectFilter} filterType={"main"} />
            )}

            <div key={uuidv4()} className="filter-value-clear">
              <i
                className="fa-regular fa-trash fa fa-xs "
                style={{ color: "#87909e" }}
                onClick={handleTrash}
              ></i>
            </div>
          </div>
        </>
      )}

      {Array.isArray(selectFilter) &&
        selectFilter.length > 0 &&
        selectFilter[1] && (
          <>
            <OperatorBtn
              filter={filters}
              selectFilter={selectFilter}
              text={filters[0]}
              handleOperatorBtn={handleOperatorBtn}
            />
            <div className="fields-group">
              <div className="group-value-list">
                {filters[index].map((item) => {
                  if (typeof item !== "string") {
                    return (
                      <>
                        <OperatorBtn
                          filter={selectFilter}
                          selectFilter={item}
                          text={filters[index][0]}
                          handleOperatorBtn={handleGroupOperatorBtn}
                        />
                        <div className="filter-value">
                          <SelectFilterDropdown
                            selectFilter={item}
                            index={index}
                            filterType={"group"}
                          />
                          {dateFilters.includes(item.name) && (
                            <DateFilters
                              selectFilter={item}
                              index={index}
                              filterType={"group"}
                            />
                          )}
                          {item.name === "Tags" && (
                            <TagsFilter
                              selectFilter={item}
                              index={index}
                              filterType={"group"}
                            />
                          )}
                          {item.name === "Status" && (
                            <StatusFilter
                              selectFilter={item}
                              index={index}
                              filterType={"group"}
                            />
                          )}
                          {priorityFilters.includes(item.name) && (
                            <PriorityFilter
                              selectFilter={item}
                              index={index}
                              filterType={"group"}
                            />
                          )}
                          {assigneeFilters.includes(item.name) && (
                            <AssigneeFilter
                              selectFilter={item}
                              index={index}
                              filterType={"group"}
                            />
                          )}
                          <div className="filter-value-clear">
                            <i
                              className="fa-regular fa-trash fa fa-xs "
                              style={{ color: "#87909e" }}
                              onClick={() => handleGroupFilterTrash(item)}
                            ></i>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
                {Array.isArray(selectFilter) && (
                  <div className="filter-value-list-container">
                    <a
                      className="filter-value-list-item-add"
                      style={{ visibility: "visible" }}
                      onClick={handleAddFilter}
                    >
                      + Add filter
                    </a>
                    <div className="filter-value-list-group-control">
                      <a
                        className="filter-value-list-group-control__remove"
                        onClick={handleClearGroup}
                      >
                        Clear Group
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>{" "}
          </>
        )}
    </React.Fragment>
  );
}

export default FilterGroup;
