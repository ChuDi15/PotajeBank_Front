import React from 'react';

const BankBodyBankAccountsElement = (props) => {
    const deleteAccount = () => {
        console.log("delete account");
    }
    const goToAccount = () =>{
        props.setSelectedAccount(props.account);
        props.setBodyShow("Account");
    }
    return (
      <div>
        <p>{props.account.name}</p>
        <button onClick={goToAccount}>GO TO</button>
        <button onClick={deleteAccount}>DELETE</button>
      </div>
    );
}

export default BankBodyBankAccountsElement;
