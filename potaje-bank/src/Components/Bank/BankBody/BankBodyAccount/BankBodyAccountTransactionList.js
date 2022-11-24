import React from 'react';
import BankBodyAccountTransaction from './BankBodyAccountTransaction';

const BankBodyAccountTransactionList = (props) => {
    var show;
    if (props.transactions.length > 0) {
      show = props.transactions.map((transaction) => (
        <BankBodyAccountTransaction
        key={transaction.idTransaction}
          transaction={transaction}
          setBodyShow={props.setBodyShow}
          setSelectedTrasaction={props.setSelectedTrasaction}
        />
      ));
    } else {
      show = <h3>No transactions. Move the money!</h3>;
    }
    return (
        <div>
            <p>Personal</p>
            {show}
        </div>
    );
}

export default BankBodyAccountTransactionList;
