import React from "react";
import BankBodyBankAccountsElement from "./BankBodyBankAccountsElement";

const BankBodyBankAccountsList = (props) => {
  var show;
  console.log(props.accounts);
  if (props.accounts.length > 0) {
    show = props.accounts.map((account) => (
      <BankBodyBankAccountsElement name={account.name} key={account.name} />
    ));
  } else {
    show = <h3>No accounts. Create one!</h3>;
  }
  return show;
};

export default BankBodyBankAccountsList;
