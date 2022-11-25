import React from 'react';
import BankBodyAccountHead from './BankBodyAccountHead';
import BankBodyAccountTransactionList from './BankBodyAccountTransactionList';

const BankBodyAccount = (props) => {
  return (
    <div className='d-flex p-5 flex-column scrollableDiv'>
      <BankBodyAccountHead />
      <BankBodyAccountTransactionList
        transactions={props.account.transactions}
        setBodyShow={props.setBodyShow}
        setSelectedTrasaction={props.setSelectedTrasaction}
      />
    </div>
  );
}

export default BankBodyAccount;
