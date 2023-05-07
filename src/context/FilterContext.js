import React, { useContext, useState } from "react";

const FilterContext = React.createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState([
    "AND",
    
  ]);

  const maxwidth = ["Is", "Is not"]

  const value = {
    setFilters,
    filters,
    maxwidth,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
