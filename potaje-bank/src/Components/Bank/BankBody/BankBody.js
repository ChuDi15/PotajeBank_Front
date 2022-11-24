import React, {useState} from 'react';
import BankBodyNotifications from './BankBodyNotifications/BankBodyNotifications';
import BankBodyHome from "./BankBodyHome/BankBodyHome";
import BankBodyMyAccount from "./BankBodyMyAccount/BankBodyMyAccount";
import BankBodyBankAccounts from './BankBodyBankAccounts/BankBodyBankAccounts';
import BankBodyAccount from './BankBodyAccount/BankBodyAccount';
import BankBodyTransaction from './BankBodyTransaction/BankBodyTransaction';

const BankBody = (props) => {

    const [selectedAccount, setSelectedAccount] = useState(null);
    const [selectedTransaction, setSelectedTrasaction] = useState(null);
    var bodyShow;
    
    if (props.show === "Home") {
      bodyShow = <BankBodyHome />;
    } else if (props.show === "MyAccount") {
      bodyShow = <BankBodyMyAccount user={props.user}/>;
    } else if (props.show === "BankAccounts") {
      bodyShow = (
        <BankBodyBankAccounts
          accounts={props.accounts}
          setSelectedAccount={setSelectedAccount}
          setBodyShow={props.setBodyShow}
        />
      );
    } else if (props.show === "Notifications") {
      bodyShow = <BankBodyNotifications />;
    } else if (props.show === "Account") {
      bodyShow = (
        <BankBodyAccount
          account={selectedAccount}
          setBodyShow={props.setBodyShow}
          setSelectedTrasaction={setSelectedTrasaction}
        />
      );
    } else if (props.show === "Transaction") {
      bodyShow = <BankBodyTransaction transaction = {selectedTransaction}/>;
    } else {
      bodyShow = <div>Error. Anything selected </div>;
    }

    return (
        <div>
            {bodyShow}
        </div>
    );
}

export default BankBody;
