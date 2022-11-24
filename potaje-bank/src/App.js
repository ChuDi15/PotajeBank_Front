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
  phonenumber: 3423432234,
  email: "wqeqw@fqew.com"
};


const accounts = [
  {
    name: "Account 1 ",
    IdBank: "qwhibiqwd",
    transactions: [
      {
        sender: "Edgar",
        receiver: "Recierver",
        amount: 123123.23,
        likes: 21,
        idTrasaction: "dwnoqwdnq",
      },
      {
        sender: "Edgar",
        receiver: "Recierver2",
        amount: -1.23,
        likes: 1,
        idTrasaction: "dwnoq1wdnq",
      },
    ],
  },
  {
    name: "Account 3 ", IdBank: "qwhib1qwd",
    IdBank: "yruewqwe",
    transactions: [
      {
        sender: "Edgar",
        receiver: "Recierver",
        amount: 123123.23,
        likes: 21,
        idTrasaction: "hgfhgf",
      },
      {
        sender: "Edgar",
        receiver: "Recierver2",
        amount: -1.23,
        likes: 1,
        idTrasaction: "hgfhgf",
      },
    ],
  },
];


function App() {
  // state of the sign
  const [signed, setSigned] = useState(false)
  // state that determinates if user wants to log or register
  const [logging, setLogging] = useState(false)
  const [bodyShow, setBodyShow] = useState("Home");
  const [navBar, setNavBar] = useState(true)

  const signedHandler = () => {
    if (signed) {
      setSigned('false');
    } else {
      setSigned('true');
    }

  }




  let show = "";

  if (signed) {

    if (navBar) {
      show = (

        <div className="row">
          <div className="col-2 sideBar">
            <BankSidebar user={user} setBodyShow={setBodyShow} />
          </div>
          <div className="col ">
            <BankHead setNavBar={setNavBar} navBar={navBar} />
            <BankBody
              user={user}
              accounts={accounts}
              show={bodyShow}
              setBodyShow={setBodyShow}
            />
          </div>
        </div>

      );
    } else {
      show = (

        <div className="row ">
          <div className="col ">
            <BankHead setNavBar={setNavBar} />
            <BankBody
              user={user}
              accounts={accounts}
              show={bodyShow}
              setBodyShow={setBodyShow}
            />
          </div>
        </div>

      );
    }
  } else if (logging) {


    console.log(logging + "logging")
    show = (
      <div className="App">
        <Logging setLogging={setLogging} logging={logging} signedHandler={signedHandler}></Logging>
      </div>
    )

  } else {

    console.log(logging + "logging false")
    show = (
      <div className="App">
        <Register setLogging={setLogging} logging={logging} signedHandler={signedHandler}></Register>
      </div>
    )
  }
  return show;
}




export default App;
