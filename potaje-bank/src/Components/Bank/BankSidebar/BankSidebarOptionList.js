import React, { useState } from 'react';
import BankSidebarOption from './BankSidebarOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBuildingColumns, faHouse, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons"

let weight1, weight2, weight3, weight4, weight5;
const BankSidebarOptionList = (props) => {



  const weightHandler = (num) => {
    switch (num) {
      case 1:
        weight1 = "bold";
        weight2 = "";
        weight3 = "";
        weight4 = "";
        weight5 = "";
        break;
      case 2:
        weight1 = "";
        weight2 = "bold";
        weight3 = "";
        weight4 = "";
        weight5 = "";
        break;
      case 3:
        weight1 = "";
        weight2 = "";
        weight3 = "bold";
        weight4 = "";
        weight5 = "";
        break;
      case 4:
        weight1 = "";
        weight2 = "";
        weight3 = "";
        weight4 = "bold";
        weight5 = "";
        break;

    }
  }

  return (
    <div className='ps-3'>
      <div style={{ fontWeight: weight1 }} className='d-flex btn align-content-center'>
        <FontAwesomeIcon icon={faHouse} className="w-25 m-auto icon" />
        <BankSidebarOption className="" name="Home" onClick={() => {
          weightHandler(1);
          props.Home();
        }} />
      </div>
      <div style={{ fontWeight: weight2 }} className='d-flex btn'>
        <FontAwesomeIcon icon={faUser} className="w-25 m-auto" />
        <BankSidebarOption name="My Account" onClick={() => {
          weightHandler(2);
          props.MyAccount();
        }} />
      </div>
      <div style={{ fontWeight: weight3 }} className='d-flex btn'>
        <FontAwesomeIcon icon={faBuildingColumns} className="w-25 m-auto" />
        <BankSidebarOption name="Bank Accounts" onClick={() => {
          weightHandler(3);
          props.BankAccounts();
        }} />
      </div>
      <div style={{ fontWeight: weight4 }} className='d-flex btn'>
        <FontAwesomeIcon icon={faBell} className="w-25 m-auto" />
        <BankSidebarOption name="Notifications" onClick={() => {
          weightHandler(4);
          props.Notifications();
        }} />
      </div>
      <div style={{ fontWeight: weight5 }} className='d-flex btn'>
        <FontAwesomeIcon icon={faRightFromBracket} className="w-25 m-auto" />
        <BankSidebarOption name="Logout" onClick={() => {
          props.Logout();
        }} />
      </div>





    </div>
  );
}

export default BankSidebarOptionList;
