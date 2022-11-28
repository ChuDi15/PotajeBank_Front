import React from 'react';
import BankBodyMyAccountImput from './BankBodyMyAccountImput';

const BankBodyMyAccount = (props) => {
  const saveData = () => {
    console.log("user Data saved.");
  }
  return (
    <div className='row p-4'>
      <div className='col-4'>
        <h4>User Settings</h4>
        <img className='imagenMyAccount ' src='https://cdni.iconscout.com/illustration/premium/thumb/cooperative-work-3428307-2886926.png' />
      </div>
      <div className='col-8 d-flex flex-column  p-5'>
        <BankBodyMyAccountImput value={props.user.name} num="primero"/>
        <BankBodyMyAccountImput value={props.user.surname}  num="segundo"/>
        <BankBodyMyAccountImput value={props.user.email}  num="tercero"/>
        <BankBodyMyAccountImput value={props.user.phonenumber}  num="cuarto"/>
        <button className='btn btn-primary w-25 ms-2 mt-3' onClick={saveData} data-test='save'>SAVE</button>
      </div>
    </div>
  );
}

export default BankBodyMyAccount;
