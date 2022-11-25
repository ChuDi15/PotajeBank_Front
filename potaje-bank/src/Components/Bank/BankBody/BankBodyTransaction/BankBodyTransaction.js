import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';

const BankBodyTransaction = (props) => {
  return (
    <div className='p-4'>
      <p className='text-primary mb-5' >Transaction Detail</p>
      <div className='d-flex justify-content-between ms-2'>
        <div className=' '>
          <img className='transactionImage  me-2' src="https://picsum.photos/id/237/600/400" alt="" />
          <img className='transactionImage  me-2' src="https://picsum.photos/id/237/600/400" alt="" />
        </div>
        <div className='d-flex align-items-center p-2'>
          <h5 className='text-danger'>${props.transaction.amount}</h5>
        </div>
      </div>
      <div className='p-2'>
        <h6 className='m-0'>{props.transaction.sender} <b className='text-muted non-bold'>paid</b> {props.transaction.receiver}</h6>
        <b className='text-muted non-bold'>Payment: {props.transaction.idTransaction} </b>
        <div className='d-flex '>
          <p>Likes: {props.transaction.likes}</p> <FontAwesomeIcon className='p-1' icon={faThumbsUp} />
        </div>
      </div>
    </div>
  );
}

export default BankBodyTransaction;
