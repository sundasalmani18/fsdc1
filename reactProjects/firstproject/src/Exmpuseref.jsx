import { useState, useEffect, useRef } from "react";

export default function Exmpuseref() {

  const [inputValue, setInputValue] = useState("");
  const textValue = useRef("")
  const count = useRef(0);

  // useEffect(() => {
  //   console.log('Hello', inputValue)
  //   // count.current = count.current + 1;
  // }, [textValue]);

  const handleInput = (e) => {
    // const { name, value } = e.target
    // console.log(name, value)
    // textValue.current = value
    // console.log(textValue?.current.value)
    setInputValue(textValue?.current.value)
  }

  return (
    <>
      <input
        name="userInput"
        type="text"
        ref={textValue}
        defaultValue={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={handleInput}
      />
      <h1>Render Count: {inputValue}</h1>
      <h1>Render Count: {count.current}</h1>
      {/* <h1>Render Ref: {textValue?.current}</h1> */}
    </>
  );
}