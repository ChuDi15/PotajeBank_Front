import React from 'react';
import BankBodyMyAccountImput from './BankBodyMyAccountImput';

const BankBodyMyAccount = (props) => {
    const saveData = () => {
        console.log("user Data saved.");
    }
    return (
      <div>
        <h2>User Settings</h2>
        <img src=''/>
        <BankBodyMyAccountImput value={props.user.name} />
        <BankBodyMyAccountImput value={props.user.surname} />
        <BankBodyMyAccountImput value={props.user.email} />
        <BankBodyMyAccountImput value={props.user.phonenumber} />
        <button onClick={saveData}>SAVE</button>
      </div>
    );
}

export default BankBodyMyAccount;
