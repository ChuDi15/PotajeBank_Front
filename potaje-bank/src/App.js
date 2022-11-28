import "./App.css";
import Children from "./Children";

const user = {
  name: "Edgar",
  surname: "J",
  username: "katharina_bernier",
  amount: "1,681.37",
  phonenumber: 3423432234,
  email: "wqeqw@fqew.com",
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
  let data = { user: user, accounts: accounts };

  return <Children data={data} />;
}

export default App;
