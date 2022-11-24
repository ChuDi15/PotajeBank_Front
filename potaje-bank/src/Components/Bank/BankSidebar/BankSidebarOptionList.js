import React from 'react';
import BankSidebarOption from './BankSidebarOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBuildingColumns, faHouse, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons"

const BankSidebarOptionList = (props) => {
  return (
    <div className='p-5'>
      <div className='d-flex '>
        <FontAwesomeIcon icon={faHouse} className="m-1" />
        <BankSidebarOption className="" name="Home" onClick={props.Home} />
      </div>
      <div className='d-flex '>
        <FontAwesomeIcon icon={faUser} className="m-1" />
        <BankSidebarOption name="My Account" onClick={props.MyAccount} />
      </div>
      <div className='d-flex '>
        <FontAwesomeIcon icon={faBuildingColumns} className="m-1" />
        <BankSidebarOption name="Bank Accounts" onClick={props.BankAccounts} />
      </div>
      <div className='d-flex '>
        <FontAwesomeIcon icon={faBell} className="m-1" />
        <BankSidebarOption name="Notifications" onClick={props.Notifications} />
      </div>
      <div className='d-flex '>
        <FontAwesomeIcon icon={faRightFromBracket} className="m-1" />
        <BankSidebarOption name="Logout" onClick={props.Logout} />
      </div>





    </div>
  );
}

export default BankSidebarOptionList;
