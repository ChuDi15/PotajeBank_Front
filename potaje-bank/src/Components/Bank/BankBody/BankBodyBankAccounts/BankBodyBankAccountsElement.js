import React from 'react';

const BankBodyBankAccountsElement = (props) => {
  const deleteAccount = () => {
    console.log("delete account");
  }
  const goToAccount = () => {
    props.setSelectedAccount(props.account);
    props.setBodyShow("Account");
  }
  return (
    <div className='d-flex justify-content-between m-2 pt-3 border-top'>
      <h5 className='m-3 text-primary'>{props.account.name}</h5>

      <div>
        <button className='btn btn-light shadow m-2' onClick={goToAccount}>GO TO</button>
        <button className='btn btn-light shadow' onClick={deleteAccount}>DELETE</button>
      </div>
    </div>
  );
}

export default BankBodyBankAccountsElement;
