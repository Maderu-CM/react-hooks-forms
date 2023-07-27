import React from "react";

function Form(props) {

  return (
    <form>
      <input 
      type="text" 
      onChangevalue={props.handleFirstName} 
      value={props.firstName}
   />

      <input 
      type="text" 
      onChangevalue={props.handleLastName}
       value={props.lastName} 
       />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
