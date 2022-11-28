import React from 'react';
import BankBodyBankAccountsCreate from './BankBodyBankAccountsCreate';

const BankBodyBankAccountsHead = (props) => {
    return (
        <div className='d-flex flex-row justify-content-between'>
            <h2 className='text-primary'>Bank Accounts</h2>
            <button className='btn btn-primary' onClick={props.setBolCreate}>Crear</button>
        </div>
    );
}

export default BankBodyBankAccountsHead;
