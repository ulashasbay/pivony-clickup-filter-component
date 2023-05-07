import React from "react";
import FilterOperatorDropdown from "../FilterOperatorDropdown/FilterOperatorDropdown";
import SelectTagsOptionsDropdown from "../SelectTagsOptionsDropdown/SelectTagsOptionsDropdown";
import { useFilter } from "../../context/FilterContext";

function TagsFilter({ selectFilter, index, filterType }) {
  const { maxwidth } = useFilter();
  return (
    <>
      <FilterOperatorDropdown
        selectFilter={selectFilter}
        filterType={filterType}
        index={index}
      />
      {maxwidth.includes(selectFilter.type) && (
        <SelectTagsOptionsDropdown
          selectFilter={selectFilter}
          filterType={filterType}
          index={index}
        />
      )}
    </>
  );
}

export default TagsFilter;
