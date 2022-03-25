import { useState } from "react";
import "./filters.scss";

const Filters = ({ data }) => {
  const [filterData, setFilterData] = useState(data);

  const handleClick = (value) => {
    const newValues = filterData.map((data) => {
      if (data.name === value) {
        return {
          ...data,
          isSelected: !data.isSelected,
        };
      } else {
        return {
          ...data,
        };
      }
    });

    setFilterData(newValues);
  };

  return (
    <div className="filters-container">
      {filterData.map((info) => {
        return (
          <div
            key={info.name}
            onClick={() => handleClick(info.name)}
            className={`filter ${info.isSelected ? "isSelected" : ""}`}
          >
            <div className="filter-image">
              <img src={info.icon} alt="" />
            </div>
            <div className="filter-name">{info.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
