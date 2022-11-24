import React from 'react';
import BankSidebarOption from './BankSidebarOption';

const BankSidebarOptionList = (props) => {
    return (
      <div>
        <BankSidebarOption name="Home" img="" onClick={props.Home} />
        <BankSidebarOption name="My Account" img="" onClick={props.MyAccount} />
        <BankSidebarOption name="Bank Accounts" img="" onClick={props.BankAccounts} />
        <BankSidebarOption name="Notifications" img="" onClick={props.Notifications} />
        <BankSidebarOption name="Logout" img="" onClick={props.Logout} />
      </div>
    );
}

export default BankSidebarOptionList;
