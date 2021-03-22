import { useState, useEffect } from "react";
import "./Input.styles.css";

const InputComponent = (props) => {
  const { displayText, setInputValue, isFocused } = props;

  /**
   * Stores local value of input box
   */

  const [inputText, setInputText] = useState(null);

  /**
   * This function, updates local copy as well as triggers update in orignal canvas elements list
   * @param {object} event
   */

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setInputValue && setInputValue(value);
    setInputText(value);
  };
  /**
   * This effect update local value, when original value is changed
   */

  useEffect(() => {
    if (displayText !== inputText) setInputText(displayText);
  }, [displayText, inputText]);

  return (
    <input
      className="input-component"
      style={{ fontSize: "inherit", fontWeight: "inherit" }}
      onChange={onChangeHandler}
      value={inputText || ""}
      autoFocus={isFocused}
    />
  );
};

export default InputComponent;
