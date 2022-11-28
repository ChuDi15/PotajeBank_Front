import React, { useState } from 'react';
import BankBodyAccountHead from './BankBodyAccountHead';
import BankBodyAccountTransactionList from './BankBodyAccountTransactionList';

const BankBodyAccount = (props) => {
  var filteredTransactions = [props.account.transactions];

  const [filteredAmount, setFilteredAmount] = useState('None');

  const amountFilterChangeHandler = (selectedAmount) => {
    setFilteredAmount(selectedAmount);
  };

  const [filteredYear, setFilteredYear] = useState('None');
  const dateFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  if (filteredYear !== 'None' && props.account.transactions != null) {
    filteredTransactions = [props.account.transactions].filter(
      (transaction) => transaction.date.getFullYear().toString() == filteredYear
    );
    if (filteredAmount !== 'None') {
      filteredTransactions = [filteredTransactions].filter(
        (transaction) => transaction.amount >= Math.abs(filteredAmount)
      );
    }
  } else if (props.account.transactions != null) {
    filteredTransactions = [props.account.transactions];
    if (filteredAmount !== 'None') {
      filteredTransactions = [filteredTransactions].filter(
        (transaction) => transaction.amount >= Math.abs(filteredAmount)
      );
    }
  }

  return (
    <div className='d-flex p-5 flex-column scrollableDiv'>
      <BankBodyAccountHead
        filteredYear={filteredYear}
        onChangeDateFilter={dateFilterChangeHandler}
        filteredAmount={filteredAmount}
        onChangeAmountFilter={amountFilterChangeHandler}
      />
      <BankBodyAccountTransactionList
        transactions={filteredTransactions}
        setBodyShow={props.setBodyShow}
        setSelectedTrasaction={props.setSelectedTrasaction}
      />
    </div>
  );
};

export default BankBodyAccount;
