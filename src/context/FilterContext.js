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

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const value = {
    setFilters,
    filters,
    maxwidth,
    isFilterMenuOpen,
    setIsFilterMenuOpen,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
