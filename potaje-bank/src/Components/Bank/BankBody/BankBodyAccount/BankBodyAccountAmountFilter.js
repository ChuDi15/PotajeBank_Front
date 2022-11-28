import React from "react";

const BankBodyAccountAmountFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select className="rounded  text-primary border-primary" onChange={dropdownChangeHandler} value={props.selected}>
          <option value="None">Amount:  None</option>
          <option value="10">Amount: &gt;10</option>
          <option value="50">Amount: &gt;50</option>
          <option value="100">Amount: &gt;100</option>
          <option value="500">Amount: &gt;500</option>
          <option value="1000">Amount: &gt;1000</option>
          <option value="5000">Amount: &gt;5000</option>
        </select>
      </div>
    </div>
  );
};

export default BankBodyAccountAmountFilter;
