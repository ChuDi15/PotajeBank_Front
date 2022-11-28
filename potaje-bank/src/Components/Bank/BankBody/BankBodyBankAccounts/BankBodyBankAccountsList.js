import React from 'react';
import BankBodyBankAccountsElement from './BankBodyBankAccountsElement';

const BankBodyBankAccountsList = (props) => {
  var show;
  if (props.accounts.length > 0) {
    show = props.accounts.map((account) => (
      <BankBodyBankAccountsElement
        account={account}
        key={account.name}
        setSelectedAccount={props.setSelectedAccount}
        setBodyShow={props.setBodyShow}
      />
    ));
  } else {
    show = <h3>No accounts. Create one!</h3>;
  }
  return <div className='d-flex flex-column m-3'>{show}</div>;
};

export default BankBodyBankAccountsList;
