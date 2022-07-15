import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    // console.log(newValue);
    // console.log(inputName);
    //  below resuts in the field not written to be deleted

    // if (inputName === "fName") {
    //   setFullName({ fName: newValue });
    // } else if (inputName === "lName") {
    //   setFullName({ lName: newValue });
    //   }

    setFullName((preValue) => {
      if (inputName === "fname") {
        return {
          fName: newValue,
          lName: preValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lname: newValue
        };
      }
      // console.log(prevValue);
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName} //if I comment out it is uncontrolled component
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
