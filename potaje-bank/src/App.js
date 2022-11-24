import "./App.css";
import BankHead from "./Components/Bank/BankHead/BankHead";
import BankSidebar from "./Components/Bank/BankSidebar/BankSidebar";
import BankBody from "./Components/Bank/BankBody/BankBody";
import Children from './Children';
import Register from './Components/Access/Register/Register';

const user = {
  name: "Edgar",
  surname: "J",
  username: "katharina_bernier",
  amount: "1,681.37",
  phonenumber: 3423432234,
  email: "wqeqw@fqew.com"
};
const accounts = [
  { name: "Account 1 ", IdBank: "qwhibiqwd" },
  { name: "Account 3 ", IdBank: "qwhib1qwd" }
];
function App() {
  return (
    <div className="App">
      <Children></Children>
      <BankSidebar user={user} />
      <div>
        <BankHead />
        <BankBody user={user} accounts={accounts} show="bankAccounts"/>
      </div>
    </div>
  );
}

export default App;
