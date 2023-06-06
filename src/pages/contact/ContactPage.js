import { useRef } from "react";
import axios from "axios";

import "./ContactPage.css";

const ContactPage = () => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();

    // let url ="https://covid-19-b41f3-default-rtdb.firebaseio.com";

    const formSubmitHandler = async(event) =>{
        event.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const phone = phoneInputRef.current.value;
        const obj = {name, email, phone}
        if(!email.includes('@') || !email.includes('.')){
          alert("please enter correct email")
          return;
        }
        const response = await axios.post("https://covid-19-b41f3-default-rtdb.firebaseio.com/contacts.json", obj);
        console.log(response);
    }

  return (
    <div className="contact_form">
      <form className="form" onSubmit={formSubmitHandler}>
        <h1>Add Contact</h1>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameInputRef} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailInputRef} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="phone" ref={phoneInputRef} required />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
