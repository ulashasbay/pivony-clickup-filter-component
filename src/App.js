import "./App.css";
import DropdownFooter from "./components/DropdownFooter/DropdownFooter";
import CloseFilterMenuBtn from "./components/CloseFilterMenuBtn/CloseFilterMenuBtn";
import FilterGroup from "./components/FilterGroup/FilterGroup";
import { useFilter } from "./context/FilterContext";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { filters, setFilters,isFilterMenuOpen, setIsFilterMenuOpen } = useFilter();

  // const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const handleClickFilterBtn = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const handleCloseFilterMenuBtn = () => {
    setIsFilterMenuOpen(false);
  };

  return (
    <div className="overlay-container">
      <Navbar handleClickFilterBtn={handleClickFilterBtn} />
      <div className="overlay-pane">
        {isFilterMenuOpen && (
          <div className="filter-menu">
            <div className="filter-menu-dropdown">
              <CloseFilterMenuBtn
                handleCloseFilterMenuBtn={handleCloseFilterMenuBtn}
              />
              <div className="filter-title-container">Filters</div>
              <div className="filter-value-list-menu-body">
                {filters.map((item, index) => {
                  if (item) {
                    return (
                      <FilterGroup
                        key={item.id}
                        selectFilter={item}
                        index={index}
                      />
                    );
                  }
                })}
                <div className="filter-value-list-container">
                  <a
                    className="filter-value-list-item-add"
                    style={{ visibility: "visible" }}
                    onClick={() =>
                      setFilters([
                        ...filters,
                        { id: uuidv4(), name: "Select Filter" },
                      ])
                    }
                  >
                    + Add filter
                  </a>
                  <div className="filter-value-list-group-control">
                    <a
                      className="filter-value-list-group-control__add-group"
                      onClick={() =>
                        setFilters([
                          ...filters,
                          ["AND", { id: uuidv4(), name: "Select Filter" }],
                        ])
                      }
                    >
                      + Add Group
                    </a>
                    <a
                      className="filter-value-list-group-control__remove"
                      onClick={() => setFilters(["AND"])}
                    >
                      Clear All Filters
                    </a>
                  </div>
                </div>
              </div>
              <DropdownFooter />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
