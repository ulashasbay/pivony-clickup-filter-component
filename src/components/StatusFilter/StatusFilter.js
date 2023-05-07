import React from 'react'
import FilterOperatorDropdown from '../FilterOperatorDropdown/FilterOperatorDropdown'
import StatusSelectOptionsDropdown from '../StatusSelectOptionsDropdown/StatusSelectOptionsDropdown'

function StatusFilter({selectFilter, filterType, index}) {
  return (
    <>
      <FilterOperatorDropdown selectFilter={selectFilter} index={index} filterType={filterType} />
      <StatusSelectOptionsDropdown selectFilter={selectFilter} index={index} filterType={filterType}/>
    </>
  )
}

export default StatusFilter