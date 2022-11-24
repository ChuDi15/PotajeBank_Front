import React from 'react';

const BankSidebarUserData = (props) => {
  return (
    <div >
      <div className='d-flex '>
        <div>
          <img className='profileIMG ' src={props.img} />
        </div>
        <div className='p-2 ms-3'>
          {props.name} {props.surname}
          <p>@{props.username}</p>
        </div>

      </div>


    </div>
  );
}

export default BankSidebarUserData;
