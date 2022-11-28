import React, { useState } from 'react';

const BankBody = (props) => {
  return (
    <div className='bgMenu p-5'>
      <div className='bg-light rounded '>{props.bodyShow}</div>
    </div>
  );
};

export default BankBody;
