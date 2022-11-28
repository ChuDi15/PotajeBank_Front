import React from 'react';
import BankSidebarUserData from './BankSidebarUserData';
import BankSidebarUserAmount from './BankSidebarUserAmount';
const BankSidebarUser = (props) => {
  var sn = props.user.userSurname[0];
  return (
    <div className='p-3'>
      <BankSidebarUserData
        name={props.user.name}
        surname={sn}
        username={props.user.userName}
        img='https://cdn1.iconfinder.com/data/icons/face-avatar/295/8-512.png'
      />
      <BankSidebarUserAmount amount={props.user.amount} />
    </div>
  );
};

export default BankSidebarUser;
