import React from 'react';



const BankBodyAccountDateFilter = (props) => {
    const dropdownChangeHandler = (event) => {
      console.log(event.target.value);
      props.onChangeFilter(event.target.value);
    };

    return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select onChange={dropdownChangeHandler} value={props.selected}>
            <option value="None">None</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    );
}

export default BankBodyAccountDateFilter;
