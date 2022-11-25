import React from 'react';

const BankBodyBankAccountsHead = () => {
    const createBankAccount = () => {
        console.log("Create new account");
    }
    return (
        <div className='d-flex flex-row justify-content-between'>
            <h2 className='text-primary'>Bank Accounts</h2>
            <button className='btn btn-primary' onClick={createBankAccount}>CREATE</button>
        </div>
    );
}

export default BankBodyBankAccountsHead;
