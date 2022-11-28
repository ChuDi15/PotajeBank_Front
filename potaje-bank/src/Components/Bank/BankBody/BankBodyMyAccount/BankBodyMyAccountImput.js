import React from 'react';

const BankBodyMyAccountImput = (props) => {
    return <input className=' p-2 m-2 w-75' value={props.value} default='' data-test={props.num}></input>;
}

export default BankBodyMyAccountImput;
