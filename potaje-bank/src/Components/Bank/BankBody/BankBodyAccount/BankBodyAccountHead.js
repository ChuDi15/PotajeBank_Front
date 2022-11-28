import React, { useState } from 'react';
import BankBodyAccountAmountFilter from './BankBodyAccountAmountFilter';
import BankBodyAccountDateFilter from './BankBodyAccountDateFilter';


const BankBodyAccountHead = (props) => {
  return (
    <div className="d-flex mb-5">
      <BankBodyAccountDateFilter
        selected={props.filteredYear}
        onChangeFilter={props.onChangeDateFilter}
      />
      <BankBodyAccountAmountFilter
        selected={props.filteredAmount}
        onChangeFilter={props.onChangeAmountFilter}
      />
    </div>
  );
}

export default BankBodyAccountHead;
