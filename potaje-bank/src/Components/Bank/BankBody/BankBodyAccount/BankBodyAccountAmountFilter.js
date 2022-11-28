import React from "react";

const BankBodyAccountAmountFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by amount</label>
        <select onChange={dropdownChangeHandler} value={props.selected}>
          <option value="None">None</option>
          <option value="10">&gt;10</option>
          <option value="50">&gt;50</option>
          <option value="100">&gt;100</option>
          <option value="500">&gt;500</option>
          <option value="1000">&gt;1000</option>
          <option value="5000">&gt;5000</option>
        </select>
      </div>
    </div>
  );
};

export default BankBodyAccountAmountFilter;
