import { useEffect, useRef } from "react";
import "./Canvas.styles.css";

import ElementComponent from "../../components/ElementComponent/Element.component";

const INVISIBLE_CANVAS_BORDER = "0.25rem solid transparent";
const VISIBLE_CANVAS_BORDER = "0.25rem dashed rgba(0,0,0, 0.4)";

const CanvasContainer = (props) => {
  const {
    canvasElements,
    maxCoordinate,
    isElementInCanvas,
    updateCanvasMaxCoordinates,
    setSelectedElement,
    updateElementPosition,
    updateElementText,
    removeCanvasElement,
  } = props;

  /**
   * Ref - Used to access Canvas Heigtht and Width on render, also to set border properties
   */

  const canvasRef = useRef();

  /**
   * Adds border when an element is dragged in current container
   * preventDefault is neccessory to hide ghost image of element when dropped
   * @param {object} event
   */

  const handleDragOver = (event) => {
    canvasRef.current.style.border = VISIBLE_CANVAS_BORDER;
    event.preventDefault();
  };

  /**
   * Removes border when drag leaves current Canvas
   */

  const handleDragLeave = () => {
    canvasRef.current.style.border = INVISIBLE_CANVAS_BORDER;
  };

  /**
   * This effect runs at mounting, updates maxCoordinates in parent component
   */

  useEffect(() => {
    const { clientHeight, clientWidth } = canvasRef.current;
    updateCanvasMaxCoordinates(clientWidth, clientHeight);
    // eslint-disable-next-line
  }, []);

  /**
   * This effect removes border when either canvas elements are updated or when modal is cancelled in case of new elements
   */

  useEffect(() => {
    canvasRef.current.style.border = INVISIBLE_CANVAS_BORDER;
  }, [canvasElements, isElementInCanvas]);

  return (
    <div
      className="canvas-container"
      ref={canvasRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {canvasElements.map((element) => {
        const { elementId } = element;

        return (
          <ElementComponent
            key={elementId}
            element={element}
            maxXCoordinate={maxCoordinate.x}
            maxYCoordinate={maxCoordinate.y}
            setSelectedElement={setSelectedElement}
            updateElementPosition={updateElementPosition}
            updateElementText={updateElementText}
            removeCanvasElement={removeCanvasElement}
          />
        );
      })}
    </div>
  );
};

export default CanvasContainer;
