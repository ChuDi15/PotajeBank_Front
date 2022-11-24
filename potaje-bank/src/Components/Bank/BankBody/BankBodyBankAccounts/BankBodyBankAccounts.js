import React from 'react';
import BankBodyBankAccountsHead from './BankBodyBankAccountsHead';
import BankBodyBankAccountsList from './BankBodyBankAccountsList';

const BankBodyBankAccounts = (props) => {
    return (
        <div>
            <BankBodyBankAccountsHead/>
            <BankBodyBankAccountsList accounts={props.accounts}/>
        </div>
    );
}

export default BankBodyBankAccounts;
