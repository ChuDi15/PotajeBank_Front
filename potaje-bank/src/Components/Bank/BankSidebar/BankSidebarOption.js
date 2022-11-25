import React from 'react';

const BankSidebarOption = (props) => {
    return (
        <div onClick={props.onClick} className="ms-1 w-100 sideBarDivHover">
            <p className='sideBarText m-auto d-flex justify-content-start'>{props.name}</p>
        </div>
    );
}

export default BankSidebarOption;
