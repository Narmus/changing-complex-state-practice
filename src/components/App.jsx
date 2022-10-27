import React, { useState } from "react";

const user = {
  firstName: "",
  lastName: "",
  emailID: "",
};

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  //Prevent page refresh on form submit
  function submitEvent(event) {
    event.preventDefault();
  }

  //Assigning values to the inputs
  function changeDetails(event) {
    const { value, name } = event.target;
    setContact((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName, email: prevValue.email };
      } else if (name === "lName") {
        return { fName: prevValue.fName, lName: value, email: prevValue.email };
      } else if (name === "email") {
        return { fName: prevValue.fName, lName: prevValue.lName, email: value };
      }
    });
  }

  function submitData() {
    user.firstName = contact.fName;
    user.lastName = contact.lName;
    user.emailID = contact.email;
    console.log(user);
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={submitEvent}>
        <input
          onChange={changeDetails}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={changeDetails}
          name="lName"
          placeholder="Last Name"
          value={contact.lname}
        />
        <input
          onChange={changeDetails}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button onClick={submitData} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
