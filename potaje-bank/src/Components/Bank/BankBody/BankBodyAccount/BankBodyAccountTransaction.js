import React from 'react';

const BankBodyAccountTransaction = (props) => {
  const goToTransaction = () => {
    props.setBodyShow("Transaction");
    props.setSelectedTrasaction(props.transaction);
  }
    return (
      <div>
        <p>
          {props.transaction.sender} paid {props.transaction.receiver}
        </p>
        <p>Payment: {props.transaction.idTransaction} </p>
        <p>Likes: {props.transaction.likes}</p>
        <button onClick={goToTransaction} >GO TO</button>
        <p>{props.transaction.amount}</p>
      </div>
    );
}

export default BankBodyAccountTransaction;
