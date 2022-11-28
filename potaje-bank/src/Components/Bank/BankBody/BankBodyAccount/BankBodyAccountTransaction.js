import React from 'react';
import BankBodyAmount from '../BankBodyCommon/BankBodyAmount';
import BankBodyPaymentData from "../BankBodyCommon/BankBodyPaymentData";

const BankBodyAccountTransaction = (props) => {
  const goToTransaction = () => {
    props.setBodyShow("Transaction");
    props.setSelectedTrasaction(props.transaction);
  }
  var amount = "";
  var classN = "";
  if (props.transaction.amount < 0) {
    amount = "-$" + Math.abs(props.transaction.amount);
    classN = "text-danger";
  } else {
    amount = "+$" + props.transaction.amount;
    classN = "text-success";
  }

  return (
    <div className="d-flex flex-row row border-top ">
      <div className="d-flex justify-content-between align-items-center col-1 p-2">
        <img
          className="imgTest"
          src="https://picsum.photos/id/1020/600/400"
          alt=""
        />
      </div>
      <div className="d-flex justify-content-between align-items-center p-2 col-11">
        <BankBodyPaymentData transaction={props.transaction} />
        <div className="transactionBankAccountsAccountNumber ">
          <BankBodyAmount amount={props.transaction.amount} />
          <button className="btn btn-primary" onClick={goToTransaction}>
            GO TO
          </button>
        </div>
      </div>
    </div>
  );
}

export default BankBodyAccountTransaction;
