import React, {useState} from 'react';
import BankBodyNotifications from './BankBodyNotifications/BankBodyNotifications';
import BankBodyHome from "./BankBodyHome/BankBodyHome";
import BankBodyMyAccount from "./BankBodyMyAccount/BankBodyMyAccount";
import BankBodyBankAccounts from './BankBodyBankAccounts/BankBodyBankAccounts';
const BankBody = (props) => {
    
    var bodyShow;
    if (props.show === "home") {
      bodyShow = <BankBodyHome />;
    } else if (props.show === "myAccount") {
      bodyShow = <BankBodyMyAccount user={props.user}/>;
    } else if (props.show === "bankAccounts") {
      bodyShow = <BankBodyBankAccounts accounts={props.accounts}/>;
    } else if (props.show === "notifications") {
      bodyShow = <BankBodyNotifications />;
    }else {
        bodyShow = <div>Error. Anything selected </div>;
    }

    return (
        <div>
            {bodyShow}
        </div>
    );
}

export default BankBody;
