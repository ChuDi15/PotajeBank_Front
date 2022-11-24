import React from 'react';
import BankBodyBankAccountsHead from './BankBodyBankAccountsHead';
import BankBodyBankAccountsList from './BankBodyBankAccountsList';

const BankBodyBankAccounts = (props) => {
  return (
    <div className=''>
      <BankBodyBankAccountsHead />
      <BankBodyBankAccountsList
        accounts={props.accounts}
        setSelectedAccount={props.setSelectedAccount}
        setBodyShow={props.setBodyShow}
      />
    </div>
  );
}

export default BankBodyBankAccounts;
