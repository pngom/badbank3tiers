function AllData() {
  const [data, setData] = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');   
  const [accountID, setAccountID] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [email, setEmail] = React.useState('');
  const ctx = React.useContext(UserContext);
  const { user } = ctx; 

  React.useEffect(() => {
        fetch('https://pngombadbankapp-d809ee1a9c5e.herokuapp.com/account/find/' + user.email)
          .then(response => response.json())
          .then(data => {
              
              console.log(data);
              ctx.user = data[0];
              setBalance(data[0].balance);
              setData(JSON.stringify(data));
          });
      }, []);

  function LogoutMsg(props){
    const currentUser = props.user.email;
    window.alert("You are logged out!");
    return(<>
      <h5>{`Hello ${currentUser}! Below is account summary as of ${dateString}:`}</h5>
    </>);
  }

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User successfully logs out");
        window.alert("You are logged out!");
        window.location.replace("/#/");
      })
      .catch((error) => {
        console.log(`Error logging out ${errorCode}: ${errorMessage}`);
      });
    
  }

  return (
    <>
    <div style={{textAlign: "right"}}>
    <p>
      Welcome <strong>{user.name}</strong>! As of {dateString} your balance is {ctx.user.balance}!
    </p>
    </div>
    <div>
    <table style={{textAlign: "right"}}>
      <td><a href="/#/deposit"><button>Deposit</button></a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      <td><a href="/#/withdraw"><button>Withdraw</button></a></td>
    </table>
    </div>

      <br></br>
      
      <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
    </>

  )
}