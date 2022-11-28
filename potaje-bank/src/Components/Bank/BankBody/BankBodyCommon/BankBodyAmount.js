import React from "react";

const BankBodyAmount = (props) => {
  var amount = "";
  var classN = "";
  if (props.amount < 0) {
    amount = "-$" + Math.abs(props.amount);
    classN = "text-danger";
  } else {
    amount = "+$" + props.amount;
    classN = "text-success";
  }
  return (
    <div className="d-flex align-items-center p-2">
      <h5 className={classN}>{amount}</h5>
    </div>
  );
};

export default BankBodyAmount;
