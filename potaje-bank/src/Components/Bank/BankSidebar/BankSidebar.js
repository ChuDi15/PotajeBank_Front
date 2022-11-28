import React from 'react';
import BankSidebarOptionList from './BankSidebarOptionList';
import BankSidebarUser from './BankSidebarUser';

const BankSidebar = (props) => {
  const setHome = () => {
    props.setBodyShow("Home");
  }
  const setMyAccount = () => {
    props.setBodyShow("MyAccount");
  }
  const setBankAccounts = () => {
    props.setBodyShow("BankAccounts");
  }
  const setNotifications = () => {
    props.setBodyShow("Notifications");
  }
  const setLogout = () => {
    props.setSign(false);
    props.setLogging(true)
  }

  return (
    <div className='sizeDiv'>
      <BankSidebarUser user={props.user} />
      <BankSidebarOptionList
        Home={setHome}
        MyAccount={setMyAccount}
        BankAccounts={setBankAccounts}
        Notifications={setNotifications}
        Logout={setLogout}
      />
    </div>
  );
}

export default BankSidebar;
