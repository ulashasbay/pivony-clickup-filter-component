import React from "react";
import { useFilter } from "../../context/FilterContext";
import FilterOperatorDropdown from "../FilterOperatorDropdown/FilterOperatorDropdown";
import AssigneeSelectOptionsDropdown from "../AssigneeSelectOptionsDropdown/AssigneeSelectOptionsDropdown";

function AssigneeFilter({ selectFilter, filterType, index }) {
  const { maxwidth } = useFilter();

  return (
    <>
      <FilterOperatorDropdown
        selectFilter={selectFilter}
        index={index}
        filterType={filterType}
      />
      {maxwidth.includes(selectFilter.type) && (
        <AssigneeSelectOptionsDropdown
          selectFilter={selectFilter}
          index={index}
          filterType={filterType}
        />
      )}
    </>
  );
}

export default AssigneeFilter;
