import React from "react";
import { useFilter } from "../../context/FilterContext";
import PrioritySelectOptionsDropdown from "../PrioritySelectOptionsDropdown/PrioritySelectOptionsDropdown";
import FilterOperatorDropdown from "../FilterOperatorDropdown/FilterOperatorDropdown";
function PriorityFilter({ selectFilter, filterType, index }) {
  const { maxwidth } = useFilter();
  return (
    <>
      <FilterOperatorDropdown
        selectFilter={selectFilter}
        index={index}
        filterType={filterType}
      />
      {maxwidth.includes(selectFilter.type) && (
        <PrioritySelectOptionsDropdown
          selectFilter={selectFilter}
          index={index}
          filterType={filterType}
        />
      )}
    </>
  );
}

export default PriorityFilter;
