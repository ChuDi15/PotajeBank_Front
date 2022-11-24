import React from 'react';

const BankBodyBankAccountsElement = (props) => {
    const deleteAccount = () => {
        console.log("gotoaccount");
    }
    return (
        <div>
            <p>{props.name}</p>
            <button onClick={deleteAccount}>DELETE</button>
        </div>
    );
}

export default BankBodyBankAccountsElement;
