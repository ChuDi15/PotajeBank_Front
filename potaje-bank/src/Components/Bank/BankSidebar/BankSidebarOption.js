import React from 'react';

const BankSidebarOption = (props) => {
    return (
        <div onClick={props.onClick}>
            <img src={props.img}></img>
            <p>{props.name}</p>
        </div>
    );
}

export default BankSidebarOption;
