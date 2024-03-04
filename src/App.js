import './App.css';
import {useState} from "react";
import { PaystackButton } from 'react-paystack'

function App() {
  const publicKey = "pk_test_d92c66078dcc0e101b7fd5d90966854978d22df5"
  const amount = 100 // Remember, set in cedis!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    channels: ['card'],
    reference: 'transactionId',
    currency: 'GHS',
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (res) => {
      alert("Thanks for doing business with us! Come back soon!!");
      console.log(res);
    },
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
      <div className="App">
        <div className="container">
          <div className="item">
            <img />
            <div className="item-details">
              <p>Dancing Shoes</p>
              <p>{amount}</p>
            </div>
          </div>
          <div className="checkout-form">
            <form>
              <label>Name</label>
              <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
              />
              <label>Phone</label>
              <input
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
              />
            </form>
            <PaystackButton {...componentProps} />
          </div>
        </div>
      </div>
  )
}

export default App;
