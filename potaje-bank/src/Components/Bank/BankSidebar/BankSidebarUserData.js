import React from 'react';

const BankSidebarUserData = (props) => {
  return (
    <div className=' responsiveUserData '>
      <div>
        <img className='profileIMG ' src={props.img} />
      </div>
      <div className='nameUserData '>
        {props.name} {props.surname}
        <p>@{props.username}</p>
      </div>
    </div>
  );
};

export default BankSidebarUserData;
