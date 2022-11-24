import "./App.css";
import BankHead from "./Components/Bank/BankHead/BankHead";
import BankSidebar from "./Components/Bank/BankSidebar/BankSidebar";
import BankBody from "./Components/Bank/BankBody/BankBody";
import Register from './Components/Access/Register/Register';
import Logging from "./Components/Access/Logging/Logging";
import { useState } from "react";

const user = {
  name: "Edgar",
  surname: "J",
  username: "katharina_bernier",
  amount: "1,681.37",
};





function App() {
  // state of the sign
  const [signed, setSigned] = useState(false)
  // state that determinates if user wants to log or register
  const [logging, setLogging] = useState(false)


  const signedHandler = () => {
    if (signed) {
      setSigned('false');
    } else {
      setSigned('true');
    }

  }

  const loggingHandler = () => {
    if (logging) {
      setLogging('false');
    } else {
      setLogging('true');
    }
  }

  let show = "";

  if (signed) {
    show = (
      <div className="App">
        <div className="row">
          <div className="col-3">
            <BankSidebar user={user} />
          </div>
          <div className="col-9">
            <BankHead />
            <BankBody />
          </div>
        ></div>
      </div>
    )
  } else if (logging) {


    console.log(logging + "logging")
    show = (
      <div className="App">
        <Logging loggingHandler={loggingHandler} signedHandler={signedHandler}></Logging>
      </div>
    )

  } else {

    console.log(logging + "logging false")
    show = (
      <div className="App">
        <Register loggingHandler={loggingHandler} signedHandler={signedHandler}></Register>
      </div>
    )
  }
  return show;
}




export default App;
