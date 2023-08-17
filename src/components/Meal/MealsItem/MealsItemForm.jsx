import { useRef } from "react";
import { useState } from "react";
import "./MealsItemForm.css";
import Input from "../../UI/Input";
const MealsItemForm = (props) => {
  const[isValid,setIsValid]=useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return
    }
    props.onAddCart(enteredAmountNumber)
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!isValid && <p>Please enter valid details (1 to 5).</p>}
      <button>+ Add</button>
    </form>
  );
};
export default MealsItemForm;
