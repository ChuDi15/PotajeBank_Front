import React from 'react';

const BankBodyAccountTransaction = (props) => {
  const goToTransaction = () => {
    props.setBodyShow("Transaction");
    props.setSelectedTrasaction(props.transaction);
  }
  //const amount = "";
  //
  //if (props.transaction.amount < 0) {
  //  amount = "-$" + props.transaction.amount;
  //} else {
  //  amount = "$" + props.transaction.amount;
  //}
  return (
    <div className='d-flex flex-row row border-top '>
      <div className='d-flex justify-content-between align-items-center col-2 p-2'>
        <img className='imgTest' src="https://picsum.photos/id/1020/600/400" alt="" />
      </div>
      <div className='d-flex justify-content-between align-items-center p-2 col-10'>
        <div className='d-flex flex-column '>

          <h6 className='m-0'>{props.transaction.sender} <b className='text-muted non-bold'>paid</b> {props.transaction.receiver}</h6>
          <p className='m-0 text-muted non-bold'>Payment: {props.transaction.idTransaction}</p>
          <p className='m-0 text-muted non-bold'>Likes: {props.transaction.likes}</p>

        </div>
        <div className='transactionBankAccountsAccountNumber p-2'>
          <h5 className='text-danger'>${props.transaction.amount}</h5>
          <button className='btn btn-primary' onClick={goToTransaction} >GO TO</button>
        </div>
      </div>
    </div>
  );
}

export default BankBodyAccountTransaction;
