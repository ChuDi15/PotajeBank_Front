import "./App.css";
import BankHead from "./Components/Bank/BankHead/BankHead";
import BankSidebar from "./Components/Bank/BankSidebar/BankSidebar";
import BankBody from "./Components/Bank/BankBody/BankBody";

const user = {
  name: "Edgar",
  surname: "J",
  username: "katharina_bernier",
  amount: "1,681.37",
};

function App() {
  return <div className="App">
    <BankSidebar user={user}/>
    <div>
      <BankHead/>
      <BankBody/>
    </div>
  </div>;
}

export default App;
