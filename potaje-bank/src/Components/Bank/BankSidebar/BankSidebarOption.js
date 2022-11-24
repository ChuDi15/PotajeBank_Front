import React from 'react';

const BankSidebarOption = (props) => {
    return (
        <div onClick={props.onClick} className="ms-5">
            <p>{props.name}</p>
        </div>
    );
}

export default BankSidebarOption;
