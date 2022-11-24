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
        <BankBodyMyAccountImput value={props.user.name} />
        <BankBodyMyAccountImput value={props.user.surname} />
        <BankBodyMyAccountImput value={props.user.email} />
        <BankBodyMyAccountImput value={props.user.phonenumber} />
        <button className='btn btn-primary w-25 ms-2 mt-3' onClick={saveData}>SAVE</button>
      </div>
    </div>
  );
}

export default BankBodyMyAccount;
