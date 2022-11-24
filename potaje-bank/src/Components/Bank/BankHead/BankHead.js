import React from "react";

const BankHead = (props) => {
  const New = () => {
    console.log("New");
  };
  const Sidebar = () => {
    console.log("New");
  };
  return (
    <div className="bg-primary d-flex justify-content-around p-4">
      <button onClick={Sidebar}> Sidebar</button>
      <p>|$| Real World App</p>
      <button onClick={New}>$ NEW </button>
    </div>
  );
};

export default BankHead;
