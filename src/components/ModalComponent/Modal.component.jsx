import { useState, useEffect } from "react";
import { ReactComponent as CloseSVG } from "../../assets/close.svg";

import "./Modal.styles.css";

import ButtonComponent from "../ButtonComponent/Button.component";
import LabelledInputComponent from "../LabelledInputComponent/LabelledInput.component";

const ModalComponent = (props) => {
  const {
    selectedElement,
    updateElementValues,
    cancelUpdateElement,
    maxXCoordinate,
    maxYCoordinate,
  } = props;

  const {
    elementType,
    text,
    xCoordinate,
    yCoordinate,
    fontSize,
    fontWeight,
    isElementNew,
  } = selectedElement;

  /**
   * Local values of Element properties, used to update orignal element only when saved
   */

  const [textLocal, setTextLocal] = useState("");
  const [xCoordinateLocal, setXCoordinateLocal] = useState("0");
  const [yCoordinateLocal, setYCoordinateLocal] = useState("0");
  const [fontSizeLocal, setFontSizeLocal] = useState("0");
  const [fontWeightLocal, setFontWeightLocal] = useState("0");

  /**
   * Used to display error message
   */

  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * Triggers updation of Element based on current local values of element properties
   */

  const updateElementValuesLocal = () => {
    const element = {
      ...selectedElement,
      text: textLocal,
      xCoordinate: parseInt(xCoordinateLocal),
      yCoordinate: parseInt(yCoordinateLocal),
      fontSize: fontSizeLocal,
      fontWeight: fontWeightLocal,
    };
    updateElementValues(isElementNew, element);
  };

  /**
   * Cancels any update in properties, closed modal
   */

  const cancelUpdateElementLocal = () => {
    cancelUpdateElement();
  };

  /**
   * Check for any error in element local properties
   */

  const checkForError = () => {
    if (
      !xCoordinateLocal.trim().length ||
      isNaN(Number(xCoordinateLocal)) ||
      parseInt(xCoordinateLocal) < 0 ||
      parseInt(xCoordinateLocal) > maxXCoordinate
    ) {
      setErrorMessage("Enter valid X Coordinate value");
      return true;
    } else if (
      !yCoordinateLocal.trim().length ||
      isNaN(Number(yCoordinateLocal)) ||
      parseInt(yCoordinateLocal) < 0 ||
      parseInt(yCoordinateLocal) > maxYCoordinate
    ) {
      setErrorMessage("Enter valid Y Coordinate value");
      return true;
    } else if (
      !fontSizeLocal.trim().length ||
      isNaN(Number(fontSizeLocal)) ||
      parseFloat(fontSizeLocal) < 0
    ) {
      setErrorMessage("Enter valid Font Size value");
      return true;
    } else if (
      !fontWeightLocal.trim().length ||
      isNaN(Number(fontWeightLocal)) ||
      parseInt(fontWeightLocal) < 0
    ) {
      setErrorMessage("Enter valid Font Weight value");
      return true;
    } else {
      setErrorMessage(null);
      return false;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    !checkForError() && updateElementValuesLocal();
  };

  /**
   * Regular effect to update local values when element properties changes
   */

  useEffect(() => {
    setTextLocal(text || "");
  }, [text]);

  useEffect(() => {
    setXCoordinateLocal(`${xCoordinate}`);
  }, [xCoordinate]);

  useEffect(() => {
    setYCoordinateLocal(`${yCoordinate}`);
  }, [yCoordinate]);

  useEffect(() => {
    setFontSizeLocal(`${fontSize}`);
  }, [fontSize]);

  useEffect(() => {
    setFontWeightLocal(`${fontWeight}`);
  }, [fontWeight]);

  /**
   * This Effects add event listener to check for escape key to close modal
   */

  useEffect(() => {
    const handleKeyUp = (event) => {
      const { keyCode } = event;
      if (keyCode === 27) {
        cancelUpdateElementLocal();
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="modal-container">
      <div className="modal-component">
        <div className="modal-component-header">
          <span className="modal-component-header-value">{`Edit ${elementType}`}</span>
          <CloseSVG
            className="modal-component-header-icon"
            onClick={() => cancelUpdateElementLocal()}
          />
        </div>
        <form className="modal-component-body" onSubmit={onSubmitHandler}>
          <LabelledInputComponent
            title="Text"
            inputValue={textLocal}
            setInputValue={setTextLocal}
            isFocused={true}
          />
          <LabelledInputComponent
            title={`X ( Max ${maxXCoordinate})`}
            inputValue={xCoordinateLocal}
            setInputValue={setXCoordinateLocal}
          />
          <LabelledInputComponent
            title={`Y ( Max ${maxYCoordinate})`}
            inputValue={yCoordinateLocal}
            setInputValue={setYCoordinateLocal}
          />
          <LabelledInputComponent
            title="Font Size"
            inputValue={fontSizeLocal}
            setInputValue={setFontSizeLocal}
          />
          <LabelledInputComponent
            title="Font Weight"
            inputValue={fontWeightLocal}
            setInputValue={setFontWeightLocal}
          />
          <span className="modal-component-body-error">{errorMessage}</span>
          <div className="modal-component-body-button">
            <ButtonComponent
              displayText="Save Changes"
              onClickFunction={onSubmitHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalComponent;
