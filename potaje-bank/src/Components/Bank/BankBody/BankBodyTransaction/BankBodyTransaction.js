
import React from 'react';
import BankBodyAmount from '../BankBodyCommon/BankBodyAmount';
import BankBodyPaymentData from '../BankBodyCommon/BankBodyPaymentData';

const BankBodyTransaction = (props) => {

  return (
    <div className="p-4">
      <p className="text-primary mb-5">Transaction Detail</p>
      <div className="d-flex justify-content-between ms-2">
        <div className=" ">
          <img
            className="transactionImage  me-2"
            src="https://picsum.photos/id/237/600/400"
            alt=""
          />
          <img
            className="transactionImage  me-2"
            src="https://picsum.photos/id/237/600/400"
            alt=""
          />
          <BankBodyPaymentData transaction={props.transaction} />

        </div>
        <BankBodyAmount amount={props.transaction.amount} />
      </div>
    </div>
  );
}

export default BankBodyTransaction;
