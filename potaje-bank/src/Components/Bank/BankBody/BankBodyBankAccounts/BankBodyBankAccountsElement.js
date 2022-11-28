import React from 'react';
import { useFetch } from '../../../../Services/Services';
const BankBodyBankAccountsElement = (props) => {
  const deleteAccount = () => {
    console.log('delete account');
  };
  const transactions = useFetch(
    'http://localhost:8080/bankaccounts/findBank/' +
      props.account.idBank +
      '/transactions'
  ).data;

  const goToAccount = () => {
    console.log('2:');
    props.setSelectedAccount({ ...props?.account, transactions: transactions });
    props.setBodyShow('Account');
  };

  return (
    <div className='d-flex justify-content-between m-2 pt-3 border-top'>
      <h5 className='m-3 text-primary'>{props.account.name}</h5>
      <h5 className='m-3 text-primary'>{props.account.name}</h5>
      <div>
        <button className='btn btn-light shadow m-2' onClick={goToAccount}>
          GO TO
        </button>
        <button
          className='btn btn-light shadow'
          onClick={deleteAccount}
          data-test='Delete-Account'
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default BankBodyBankAccountsElement;
