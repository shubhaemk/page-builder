import "./LabelledInput.styles.css";

import InputComponent from "../InputComponent/Input.component";
import LabelComponent from "../LabelComponent/Label.component";

const LabelledInputComponent = (props) => {
  const { title, inputValue, setInputValue, isFocused } = props;

  return (
    <div className="labelled-input-container">
      <LabelComponent displayText={title} />
      <InputComponent
        displayText={inputValue}
        setInputValue={setInputValue}
        isFocused={isFocused}
      />
    </div>
  );
};

export default LabelledInputComponent;
