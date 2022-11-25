import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDollarSign, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons"

const BankHead = (props) => {
  const New = () => {
    console.log("New");
  };
  const Sidebar = () => {
    if (props.navBar) {
      props.setNavBar(false);
    } else {
      props.setNavBar(true);
    }

  };
  return (
    <div className="headerNav d-flex justify-content-between p-4  shadow">
      <FontAwesomeIcon onClick={Sidebar} className="navBars" icon={faBars} />
      <div className="d-flex m-2">
        <FontAwesomeIcon icon={faMoneyCheckDollar} className="text-white dollarCard" />
        <h3 className="text-white "> Real World App</h3>
      </div>

      <button className="botonNew shadow " onClick={New}>
        <FontAwesomeIcon icon={faDollarSign} className="text-white dollarSignNew" />
        NEW </button>
    </div>

  );
};

export default BankHead;
