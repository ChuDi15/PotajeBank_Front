import "./App.css";
import BankHead from "./Components/Bank/BankHead/BankHead";
import BankSidebar from "./Components/Bank/BankSidebar/BankSidebar";
import BankBody from "./Components/Bank/BankBody/BankBody";
import Register from './Components/Access/Register/Register';
import Logging from "./Components/Access/Logging/Logging";
import { useState } from "react";
import BankBodyNotifications from "./Components/Bank/BankBody/BankBodyNotifications/BankBodyNotifications";
import BankBodyHome from "./Components/Bank/BankBody/BankBodyHome/BankBodyHome";
import BankBodyMyAccount from "./Components/Bank/BankBody/BankBodyMyAccount/BankBodyMyAccount";
import BankBodyBankAccounts from "./Components/Bank/BankBody/BankBodyBankAccounts/BankBodyBankAccounts";
import BankBodyAccount from "./Components/Bank/BankBody/BankBodyAccount/BankBodyAccount";
import BankBodyTransaction from "./Components/Bank/BankBody/BankBodyTransaction/BankBodyTransaction";

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
        date: new Date(2022, 7, 14),
        likes: 21,
        idTransaction: "dwnoqwdnq",
      },
      {
        sender: "Edgar",
        receiver: "Recierver2",
        amount: -1.23,
        date: new Date(2022, 3, 5),
        likes: 1,
        idTransaction: "dwnoq1wdnq",
      },
      {
        sender: "Luis",
        receiver: "Recierver3",
        amount: 61.233,
        date: new Date(2021, 3, 5),
        likes: 4,
        idTransaction: "fdsf",
      },
      {
        sender: "Jose",
        receiver: "Recierver4",
        amount: 811.23,
        date: new Date(2019, 3, 5),
        likes: 3,
        idTransaction: "hgf",
      },
    ],
  },
  {
    name: "Account 3 ",
    IdBank: "qwhib1qwd",
    IdBank: "yruewqwe",
    transactions: [
      {
        sender: "Edgar",
        receiver: "Recierver",
        amount: 123123.23,
        date: new Date(2020, 3, 5),
        likes: 21,
        idTransaction: "hgfhgf",
      },
      {
        sender: "Edgar",
        receiver: "Recierver2",
        amount: -1.23,
        date: new Date(2022, 3, 5),
        likes: 1,
        idTransaction: "hgfhgf",
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
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [selectedTransaction, setSelectedTrasaction] = useState(null);


  let bodyShowText = "";
  if (bodyShow === "Home") {
    bodyShowText = <BankBodyHome />;
  } else if (bodyShow === "MyAccount") {
    bodyShowText = <BankBodyMyAccount user={user} />;
  } else if (bodyShow === "BankAccounts") {
    bodyShowText = (
      <BankBodyBankAccounts
        accounts={accounts}
        setSelectedAccount={setSelectedAccount}
        setBodyShow={setBodyShow}
      />
    );
  } else if (bodyShow === "Notifications") {
    bodyShowText = <BankBodyNotifications />;
  } else if (bodyShow === "Account") {
    bodyShowText = (
      <BankBodyAccount
        account={selectedAccount}
        setBodyShow={setBodyShow}
        setSelectedTrasaction={setSelectedTrasaction}
      />
    );
  } else if (bodyShow === "Transaction") {
    bodyShowText = <BankBodyTransaction transaction={selectedTransaction} />;
  } else {
    bodyShowText = <div>Error. Anything selected </div>;
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
              bodyShow={bodyShowText}
            />
          </div>
        </div>

      );
    } else {
      show = (
        <div className="row ">
          <div className="col ">
            <BankHead setNavBar={setNavBar} navBar={navBar} />
            <BankBody
              bodyShow={bodyShowText}
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
