import React from 'react';

const BankBodyTransaction = (props) => {
    return (
      <div>
        <p>
          {props.transaction.sender} paid {props.transaction.receiver}
        </p>
        <p>Payment: {props.transaction.idTransaction} </p>
        <p>Likes: {props.transaction.likes}</p>
        <p>{props.transaction.amount}</p>
      </div>
    );
}

export default BankBodyTransaction;
