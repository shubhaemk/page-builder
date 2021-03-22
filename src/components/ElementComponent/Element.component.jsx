import { useState, useRef, useEffect } from "react";
import ButtonComponent from "../ButtonComponent/Button.component";
import InputComponent from "../InputComponent/Input.component";
import LabelComponent from "../LabelComponent/Label.component";

import "./Element.styles.css";

const ElementComponent = (props) => {
  const {
    element,
    maxXCoordinate,
    maxYCoordinate,
    setSelectedElement,
    updateElementPosition,
    updateElementText,
    removeCanvasElement,
  } = props;

  const {
    elementId,
    elementType,
    text,
    xCoordinate,
    yCoordinate,
    zIndex,
    fontSize,
    fontWeight,
  } = element;

  /**
   * Bool - Used to check if current element is clicked
   */

  const [isClicked, setIsClicked] = useState(false);

  /**
   * Object - Local copy of element X and Y Coordinates
   */

  const [coordinates, setCoordinates] = useState({
    x: xCoordinate,
    y: yCoordinate,
  });

  /**
   * Ref - Used to access DOM properties of element
   */

  const elementRef = useRef();

  /**
   * Ref (bool) - Used to get the latest value of isClicked in some troubled functions
   */

  const isClickedLatest = useRef(isClicked);

  /**
   * Ref : Stores current mouse position
   */

  const mousePointerRef = useRef({
    x: 0,
    y: 0,
  });

  /**
   * Updates text of selected element in Canvas Elements list
   * @param {string} text
   */

  const updateElementTextLocal = (text) => updateElementText(text, elementId);

  /**
   * Visibility of element is set to 0 to hide draggging ghost image and element together (element is hidden)
   * typeof InstallTrigger !== "undefined" checks if browser is firefox
   */

  const onDragStartHandler = () => {
    const isFirefox = typeof InstallTrigger !== "undefined";
    elementRef.current.style.opacity = isFirefox ? "1" : "0";
  };

  /**
   * On Drage event handler, updates local values of Element Coordinates
   * @param {object} event
   */

  const onDragHandler = (event) => {
    let { pageX: xCoordinate, pageY: yCoordinate } = event;

    setCoordinates((originalCoordinates) => ({
      x:
        xCoordinate > 0 && xCoordinate < maxXCoordinate
          ? xCoordinate
          : originalCoordinates.x,
      y:
        yCoordinate > 0 && yCoordinate < maxYCoordinate
          ? yCoordinate
          : originalCoordinates.y,
    }));
  };

  /**
   * When element drag ends, its value is reflected in Canvas element List
   */

  const onDragEndHandler = () => {
    updateElementPosition(
      mousePointerRef.current.x,
      mousePointerRef.current.y,
      elementId
    );
  };

  /**
   * Used to set Opacity 1, when being dragged
   * @param {object} event
   */

  const onDragOverHandler = (event) => {
    event.preventDefault();
    elementRef.current.style.opacity = "1";
  };

  /**
   * Sets isClicked to true, to highlight it
   * @param {object} event
   */

  const onClickHandler = (event) => {
    event.preventDefault();
    setIsClicked(true);
  };

  /**
   * Renders Element depending on its type
   * @param {string} localElementType - Element type to be rendered (label, input, button)
   * @param {string} localDisplayText - Text to display in Rendered Element
   */

  const _renderElement = (localElementType, localDisplayText) => {
    if (localElementType === "input")
      return (
        <InputComponent
          displayText={localDisplayText}
          setInputValue={updateElementTextLocal}
        />
      );
    if (localElementType === "label")
      return <LabelComponent displayText={localDisplayText} />;
    if (localElementType === "button")
      return <ButtonComponent displayText={localDisplayText} />;

    return null;
  };

  /**
   * Returns, class name depending on element type
   * @param {string} localElementType - Element type (label, input, button)
   */

  const _getElementClass = (localElementType) =>
    `element-component-${localElementType} element-component-common`;

  /**
   * This effect runs when elementRef is accessible and adds event listener on
   * element for key presses (enter/delete)
   */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    const handleKeyPress = (event) => {
      if (isClickedLatest.current) {
        const { keyCode } = event;
        if (keyCode === 13) {
          setSelectedElement(elementId);
          setIsClicked(false);
        }

        if (keyCode === 8) {
          removeCanvasElement(elementId);
          setIsClicked(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keyup", handleKeyPress);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keyup", handleKeyPress);
    };
    // eslint-disable-next-line
  }, [elementRef, isClicked]);

  /**
   * This effect updates positon of element on any change in original element
   */

  useEffect(() => {
    setCoordinates({
      x: xCoordinate || 0,
      y: yCoordinate || 0,
    });
  }, [xCoordinate, yCoordinate]);

  /**
   * This effect is used to update the ref, which stores latest value of isClicked for functions with stale state
   */

  useEffect(() => {
    isClickedLatest.current = isClicked;
  }, [isClicked]);

  /**
   * This hook adds event listener for drop events on window
   * Need this to get drop location as you can't get screenX, screenY on firefox
   */

  useEffect(() => {
    const dropEventListener = (event) => {
      mousePointerRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener("drop", dropEventListener);

    return () => window.removeEventListener("drop", dropEventListener);
  }, []);

  const styleObject = {
    position: "absolute",
    left: coordinates.x,
    top: coordinates.y,
    fontSize: `${fontSize}rem`,
    fontWeight,
    zIndex: zIndex,
    border: `0.2rem solid ${isClicked ? "#E00" : "transparent"}`,
    padding: "0.5rem",
  };

  return (
    <div
      ref={elementRef}
      className={_getElementClass(elementType)}
      style={styleObject}
      onDragStart={onDragStartHandler}
      onDrag={onDragHandler}
      onDragEnd={onDragEndHandler}
      onDragOver={onDragOverHandler}
      onClick={onClickHandler}
      draggable={true}
    >
      {_renderElement(elementType, text)}
    </div>
  );
};

export default ElementComponent;
