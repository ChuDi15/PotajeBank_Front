import React, { useState } from 'react';
import BankBodyBankAccountsCreate from './BankBodyBankAccountsCreate';
import BankBodyBankAccountsHead from './BankBodyBankAccountsHead';
import BankBodyBankAccountsList from './BankBodyBankAccountsList';

const BankBodyBankAccounts = (props) => {
  const [bolCreate, setBolCreate] = useState(false);

  if (!bolCreate) {
    return (
      <div className='p-4 d-flex flex-column'>
        <BankBodyBankAccountsHead setBolCreate={setBolCreate} />

        <BankBodyBankAccountsList
          accounts={props.accounts}
          setSelectedAccount={props.setSelectedAccount}
          setBodyShow={props.setBodyShow}
        />
      </div>
    );
  } else {
    return (
      <div className='p-4 d-flex flex-column'>
        <BankBodyBankAccountsCreate
          setBolCreate={setBolCreate}
        ></BankBodyBankAccountsCreate>
      </div>
    );
  }
};

export default BankBodyBankAccounts;
