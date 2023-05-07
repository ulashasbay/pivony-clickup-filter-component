import React from "react";
import FilterOperatorDropdown from "../FilterOperatorDropdown/FilterOperatorDropdown";
import DateDropdown from "../DateDropdown/DateDropdown";
import { useFilter } from "../../context/FilterContext";
import DateExtraFilters from "../DateExtraFilters/DateExtraFilters";

function DueDateFilter({ selectFilter, index, filterType }) {
  const { maxwidth } = useFilter();
  const extraDates = ["Last", "Next"];
  return (
    <>
      <FilterOperatorDropdown
        selectFilter={selectFilter}
        index={index}
        filterType={filterType}
      />
      {maxwidth.includes(selectFilter.type) &&
        !extraDates.includes(selectFilter.value) && (
          <DateDropdown
            selectFilter={selectFilter}
            index={index}
            filterType={filterType}
          />
        )}

      {maxwidth.includes(selectFilter.type) &&
        extraDates.includes(selectFilter.value) && (
          <DateExtraFilters
            selectFilter={selectFilter}
            index={index}
            filterType={filterType}
          />
        )}
    </>
  );
}

export default DueDateFilter;
