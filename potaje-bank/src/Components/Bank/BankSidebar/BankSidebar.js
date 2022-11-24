import React from 'react';
import BankSidebarOptionList from './BankSidebarOptionList';
import BankSidebarUser from './BankSidebarUser';

const BankSidebar = (props) => {
    const Home = () => {
        console.log("Home");
    }
    const MyAccount = () => {
        console.log("MyAccount");
    }
    const BankAccounts = () => {
        console.log("BankAccounts");
    }
    const Notifications = () => {
        console.log("Notifications");
    }
    const Logout = () => {
        console.log("Logout");
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
