import React from 'react';

const BankSidebarUserData = (props) => {
    return (
      <div>
        <img src={props.img} />
        <div>
          <p>
            {props.name} {props.surname}
          </p>
          <p>@{props.username}</p>
        </div>
      </div>
    );
}

export default BankSidebarUserData;
