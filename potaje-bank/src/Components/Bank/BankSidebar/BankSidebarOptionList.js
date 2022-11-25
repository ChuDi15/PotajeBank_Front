import React from 'react';
import BankSidebarOption from './BankSidebarOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBuildingColumns, faHouse, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons"


const BankSidebarOptionList = (props) => {
  return (
    <div className='ps-3'>
      <div className='d-flex btn align-content-center'>
        <FontAwesomeIcon icon={faHouse} className="w-25 m-auto icon" />
        <BankSidebarOption className="" name="Home" onClick={props.Home} />
      </div>
      <div className='d-flex btn'>
        <FontAwesomeIcon icon={faUser} className="w-25 m-auto" />
        <BankSidebarOption name="My Account" onClick={props.MyAccount} />
      </div>
      <div className='d-flex btn'>
        <FontAwesomeIcon icon={faBuildingColumns} className="w-25 m-auto" />
        <BankSidebarOption name="Bank Accounts" onClick={props.BankAccounts} />
      </div>
      <div className='d-flex btn'>
        <FontAwesomeIcon icon={faBell} className="w-25 m-auto" />
        <BankSidebarOption name="Notifications" onClick={props.Notifications} />
      </div>
      <div className='d-flex btn'>
        <FontAwesomeIcon icon={faRightFromBracket} className="w-25 m-auto" />
        <BankSidebarOption name="Logout" onClick={props.Logout} />
      </div>





    </div>
  );
}

export default BankSidebarOptionList;
