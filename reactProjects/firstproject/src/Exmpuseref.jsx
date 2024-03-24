import { useState, useEffect, useRef } from "react";

export default function Exmpuseref() {

  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const textValue = useRef("")
  const count = useRef(0);

  useEffect(() => {
    console.log('Hello', count)
    count.current = count.current + 1;
    previousInputValue.current = inputValue
    focusInput()
  },[inputValue]);

  // const handleInput = (e) => {
  //   // const { name, value } = e.target
  //   // console.log(name, value)
  //   // textValue.current = value
  //   // console.log(textValue?.current.value)
  //   setInputValue(textValue?.current.value)
  // }

  const focusInput = () => {
    textValue.current.focus();
  };

  return (
    <>
      <input
        name="userInput"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        ref={textValue}
      // defaultValue={inputValue}
      // onChange={handleInput}
      />
      {/* <button onClick={focusInput}>Focus Input</button> */}
      {/* <h1>Render Count: {inputValue}</h1> */}
      <h1>Render Count: {count.current}</h1>
      <h1>Current Input Value : {inputValue}</h1>
      <h1>Previous Input Value: {previousInputValue.current}</h1>
      {/* <h1>Render Ref: {textValue?.current}</h1> */}
    </>
  );
}