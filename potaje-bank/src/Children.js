import { useState } from "react";

import loginRegisterContent from "./Services/Helper";
function Children(props) {
  let data = props.data;

  const [bodyShow, setBodyShow] = useState("Home");
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedTransaction, setSelectedTrasaction] = useState(null);

  const bodyStates = {
    bodyShow: bodyShow,
    setBodyShow: setBodyShow,
    selectedAccount: selectedAccount,
    setSelectedAccount: setSelectedAccount,
    selectedTransaction: selectedTransaction,
    setSelectedTrasaction: setSelectedTrasaction,
  };



  const [signed, setSigned] = useState(false);
  const [logging, setLogging] = useState(false);

  const [navBar, setNavBar] = useState(true);


  const signedHandler = () => {
    if (signed) {
      setSigned("false");
    } else {
      setSigned("true");
    }
  };

  let states = {
    signed: signed,
    setSigned: setSigned,
    logging: logging,
    setLogging: setLogging,
    signedHandler: signedHandler,
    navBar: navBar,
    setNavBar: setNavBar,
    bodyStates: bodyStates,
  };

  let show = loginRegisterContent(data, states);

  return show;
}

export default Children;
