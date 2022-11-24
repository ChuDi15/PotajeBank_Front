import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDollarSign } from "@fortawesome/free-solid-svg-icons"

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

      <h3 className="text-white"> Real World App</h3>
      <button className="btn-success btn" onClick={New}>$ NEW </button>
    </div>
  );
};

export default BankHead;
