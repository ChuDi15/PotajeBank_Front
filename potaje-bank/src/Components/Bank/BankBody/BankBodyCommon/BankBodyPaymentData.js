import React from 'react';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BankBodyPaymentData = (props) => {
  return (
    <div className="p-2">
      <h6 className="m-0">
        {props.transaction.sender} <b className="text-muted non-bold">paid</b>{" "}
        {props.transaction.receiver}
      </h6>
      <b className="text-muted non-bold">
        Payment: {props.transaction.idTransaction}{" "}
      </b>
      <div className="d-flex ">
        <p>Likes: {props.transaction.likes}</p>{" "}
        <FontAwesomeIcon className="p-1" icon={faThumbsUp} />
      </div>
    </div>
  );
}

export default BankBodyPaymentData;
