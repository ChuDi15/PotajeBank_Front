import BankBodyNotifications from './../Components/Bank/BankBody/BankBodyNotifications/BankBodyNotifications';
import BankBodyHome from './../Components/Bank/BankBody/BankBodyHome/BankBodyHome';
import BankBodyMyAccount from './../Components/Bank/BankBody/BankBodyMyAccount/BankBodyMyAccount';
import BankBodyBankAccounts from './../Components/Bank/BankBody/BankBodyBankAccounts/BankBodyBankAccounts';
import BankBodyAccount from './../Components/Bank/BankBody/BankBodyAccount/BankBodyAccount';
import BankBodyTransaction from './../Components/Bank/BankBody/BankBodyTransaction/BankBodyTransaction';
import BankHead from './../Components/Bank/BankHead/BankHead';
import BankSidebar from './../Components/Bank/BankSidebar/BankSidebar';
import BankBody from './../Components/Bank/BankBody/BankBody';
import Register from './../Components/Access/Register/Register';
import Logging from './../Components/Access/Logging/Logging';

function bodyContent(user, accounts, states) {
  var bodyShow = '';
  switch (states.bodyShow) {
    case 'Home':
      bodyShow = <BankBodyHome />;
      break;
    case 'MyAccount':
      bodyShow = <BankBodyMyAccount user={user} />;
      break;
    case 'BankAccounts':
      bodyShow = (
        <BankBodyBankAccounts
          accounts={accounts}
          setSelectedAccount={states.setSelectedAccount}
          setBodyShow={states.setBodyShow}
        />
      );
      break;
    case 'Notifications':
      bodyShow = <BankBodyNotifications />;
      break;
    case 'Account':
      bodyShow = (
        <BankBodyAccount
          account={states.selectedAccount}
          setBodyShow={states.setBodyShow}
          setSelectedTrasaction={states.setSelectedTrasaction}
        />
      );
      break;
    case 'Transaction':
      bodyShow = (
        <BankBodyTransaction transaction={states.selectedTransaction} />
      );
      break;

    default:
      bodyShow = <div>Error. Anything selected </div>;
      break;
  }

  return bodyShow;
}

function loginRegisterContent(data, states) {
  let bodyShowText = bodyContent(data.user, data.accounts, states.bodyStates);
  let show = '';

  if (states.signed) {
    if (states.navBar) {
      show = (
        <div className='row'>
          <div className='col-2 sideBar'>
            <BankSidebar
              setSign={states.setSigned}
              setLogging={states.setLogging}
              user={data.user}
              setBodyShow={states.bodyStates.setBodyShow}
            />
          </div>
          <div className='col '>
            <BankHead setNavBar={states.setNavBar} navBar={states.navBar} />
            <BankBody bodyShow={bodyShowText} />
          </div>
        </div>
      );
    } else {
      show = (
        <div className='row '>
          <div className='col '>
            <BankHead setNavBar={states.setNavBar} navBar={states.navBar} />
            <BankBody bodyShow={bodyShowText} />
          </div>
        </div>
      );
    }
  } else if (states.logging) {
    show = (
      <div className='App'>
        <Logging
          setLogging={states.setLogging}
          logging={states.logging}
          signedHandler={states.signedHandler}
        ></Logging>
      </div>
    );
  } else {
    show = (
      <div className='App'>
        <Register
          setLogging={states.setLogging}
          logging={states.logging}
          signedHandler={states.signedHandler}
        ></Register>
      </div>
    );
  }
  return show;
}
const calculateAmount = (accounts) => {
  let c = 0;
  for (let a of accounts) {
    c += a.amount;
  }
  return c;
};
export default loginRegisterContent;
