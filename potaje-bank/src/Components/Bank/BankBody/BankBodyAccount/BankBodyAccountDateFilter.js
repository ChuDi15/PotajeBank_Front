import React from 'react';



const BankBodyAccountDateFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter me-3">
      <div className="expenses-filter__control">

        <select className='rounded text-primary border-primary' onChange={dropdownChangeHandler} value={props.selected}>
          <option value="None">Date: None</option>
          <option value="2022">Date: 2022</option>
          <option value="2021">Date: 2021</option>
          <option value="2020">Date: 2020</option>
          <option value="2019">Date: 2019</option>
        </select>
      </div>
    </div>
  );
}

export default BankBodyAccountDateFilter;
