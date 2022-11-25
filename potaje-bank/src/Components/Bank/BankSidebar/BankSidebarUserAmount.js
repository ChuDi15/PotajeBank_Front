import React from 'react';

const BankSidebarUserAmount = (props) => {
  return (
    <div>
      <h3 className='fw-bold amountBalance'>${props.amount}</h3>
      <p>Amount Balance</p>
    </div>
  );
}

export default BankSidebarUserAmount;
