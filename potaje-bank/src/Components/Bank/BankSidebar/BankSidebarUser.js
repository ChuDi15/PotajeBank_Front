import React from 'react';
import BankSidebarUserData from './BankSidebarUserData';
import BankSidebarUserAmount from "./BankSidebarUserAmount";
const BankSidebarUser = (props) => {
    return (
      <div>
        <BankSidebarUserData
          name={props.user.name}
          surname={props.user.surname}
          username={props.user.username}
          img=""
        />
        <BankSidebarUserAmount amount={props.user.amount} />
      </div>
    );
}

export default BankSidebarUser;
