import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Enter City" required  autoFocus/>
      <input type="text" name="country" placeholder="Enter Country" required />
      <button>Show Weather</button>
    </form>
  );
};

export default Form;
