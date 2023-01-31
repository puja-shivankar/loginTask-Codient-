import { useState } from "react";

function Form(props) {
    const [name, setName]= useState("");
    const nameHandler=(event)=>{
        setName(event.target.value);
    }
  const submitHandler=(e)=>{
    e.preventDefault();
    props.onSubmit(name);
  }
    return (

      <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={name} onChange={nameHandler}/>
            <button type="submit">submit</button>
        </form>
      </div>
    );
  }
  
  export default Form;
  