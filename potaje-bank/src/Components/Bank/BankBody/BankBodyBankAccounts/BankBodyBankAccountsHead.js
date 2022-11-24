import React from 'react';

const BankBodyBankAccountsHead = () => {
    const createBankAccount = () => {
        console.log("Create new account");
    }
    return (
        <div>
            <h2>Bank Accounts</h2>
            <button onClick={createBankAccount}>CREATE</button>
        </div>
    );
}

export default BankBodyBankAccountsHead;
