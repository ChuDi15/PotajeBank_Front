import React from 'react';
import BankSidebarOptionList from './BankSidebarOptionList';
import BankSidebarUser from './BankSidebarUser';

const BankSidebar = (props) => {
    const Home = () => {
        props.setBodyShow("Home");
    }
    const MyAccount = () => {
        props.setBodyShow("MyAccount");
    }
    const BankAccounts = () => {
        props.setBodyShow("BankAccounts");
    }
    const Notifications = () => {
        props.setBodyShow("Notifications");
    }
    const Logout = () => {
        props.setBodyShow("Logout");
    }
    return (
      <div>
        <BankSidebarUser user={props.user} />
        <BankSidebarOptionList
          Home={Home}
          MyAccount={MyAccount}
          BankAccounts={BankAccounts}
          Notifications={Notifications}
          Logout={Logout}
        />
      </div>
    );
}

export default BankSidebar;
