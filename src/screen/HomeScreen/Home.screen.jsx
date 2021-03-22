import { useState, useRef, useEffect } from "react";
import { v4 as uuid4 } from "uuid";

import "./Home.styles.css";

import ListContainer from "../../container/ListContainer/List.container";
import CanvasContainer from "../../container/CanvasContainer/Canvas.container";
import ModalComponent from "../../components/ModalComponent/Modal.component";

const LOCAL_STORAGE_NAME = "canvas-elements";

const HomeScreen = () => {
  /**
   * Object - Max X and Y Coordinates, usefull to set boundary of canvas
   */

  const [maxCoordinate, setMaxCoordinate] = useState({
    x: 0,
    y: 0,
  });

  /**
   * Bool - Used to check if element is dropped in canvas, usefull for border
   */

  const [isElementInCanvas, setIsElementInCanvas] = useState(false);

  /**
   * Bool - Used to detect if elements are fetched from local storage
   */

  const [isLocalCanvasElementsSet, setIsLocalCanvasElementsSet] = useState(
    false
  );

  /**
   * Array - Used to store elements on Canvas
   */

  const [canvasElements, setCanvasElements] = useState([]);

  /**
   * Object - Selected element is stored, wehn set opens modal
   */

  const [selectedElement, setSelectedElement] = useState(null);

  /**
   * Ref - Used to access latest value of Canvas Elements in functions with stale state access
   */

  const canvasElementsLatest = useRef(canvasElements);

  /**
   * Removes element selected and closes the update modal
   */

  const removeSelectedElement = () => {
    setSelectedElement(null);
    setIsElementInCanvas(false);
  };

  /**
   * Removes given item from canvas elements
   * @param {string} elementId - Id of element to remove from canvas elements
   */

  const removeCanvasElement = (elementId) =>
    setCanvasElements(
      canvasElements.filter((element) => element.elementId !== elementId)
    );

  /**
   * Updates all values of an element
   * @param {boolean} isElementNew - Indicates if element is new
   * @param {object} element - Updated element object
   */

  const updateElementValues = (isElementNew, element) => {
    if (isElementNew) {
      setCanvasElements([
        ...canvasElements,
        { ...element, isElementNew: false },
      ]);
    } else {
      setCanvasElements((previousCanvasElements) =>
        previousCanvasElements.map((canvasElement) =>
          canvasElement.elementId === element.elementId
            ? { ...element, elementId: uuid4(), isElementNew: false }
            : canvasElement
        )
      );
    }
    setSelectedElement(null);
  };

  /**
   * Updates position X and Y of an element to point location on canvas
   * @param {number} xCoordinate - X Coordinate of element
   * @param {number} yCoordinate - Y Coordinate of element
   * @param {string} elementId - ID of moving element
   */

  const updateElementPosition = (xCoordinate, yCoordinate, elementId) => {
    setCanvasElements((previousCanvasElements) =>
      previousCanvasElements.map((canvasElement) =>
        canvasElement.elementId === elementId
          ? {
              ...canvasElement,
              xCoordinate,
              yCoordinate,
              elementId: uuid4(),
              isElementNew: false,
            }
          : canvasElement
      )
    );
  };

  /**
   * Update text value of an element ( used in Input element )
   * @param {string} text - Text updated through elemnent
   * @param {string} elementId - ID of element
   */

  const updateElementText = (text, elementId) => {
    setCanvasElements(
      canvasElements.map((canvasElement) => {
        if (canvasElement.elementId === elementId) {
          const updatedElement = {
            ...canvasElement,
            text,
            isElementNew: false,
          };
          return updatedElement;
        } else {
          return canvasElement;
        }
      })
    );
  };

  /**
   * Updates Max Coordinates, usefull to check boundaries
   * @param {number} maxXCoordinate - Max X Coordinate an element can move on Canvas
   * @param {number} maxYCoordinate - Max Y Coordinate an element can move on Canvas
   */

  const updateCanvasMaxCoordinates = (maxXCoordinate, maxYCoordinate) => {
    setMaxCoordinate({
      x: maxXCoordinate,
      y: maxYCoordinate - 30,
    });
  };

  /**
   * Sets selected element and opens up modal
   * @param {string} elementId - ID of element, to open in modal
   */

  const updateSelectedItem = (elementId) => {
    for (const element of canvasElementsLatest.current) {
      if (element.elementId === elementId) {
        setSelectedElement(element);
        return;
      }
    }

    setSelectedElement(null);
  };

  /**
   * Creates a new element configuration and opens up edit modal
   * @param {string} elementType - Describes element type (label/input/button)
   * @param {*} xCoordinate - X Coordinate of element dropped
   * @param {*} yCoordinate - Y Coordinate of element dropped
   */

  const newCanvasElement = (elementType, xCoordinate, yCoordinate) => {
    const uid = uuid4();
    const element = {
      elementId: uid,
      elementType,
      text: null,
      xCoordinate,
      yCoordinate,
      zIndex: `${100 + canvasElementsLatest.current.length}`,
      fontSize: 2,
      fontWeight: 100,
      isElementNew: true,
    };
    setSelectedElement(element);
    setIsElementInCanvas(true);
  };

  /**
   * This effect runs after every change in canvas elements (addition, modification)
   * Updates canvas element ref used to access latest canvas element value
   * Updates locallly stored canvas elements
   */

  useEffect(() => {
    canvasElementsLatest.current = canvasElements;
    isLocalCanvasElementsSet &&
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(canvasElements));
  }, [canvasElements, isLocalCanvasElementsSet]);

  /**
   * This effect runs at mounting to retrive canvas elements stored in local storage
   */

  useEffect(() => {
    setCanvasElements(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)) || []
    );
    setIsLocalCanvasElementsSet(true);
  }, []);

  return (
    <div className="home-screen-container">
      <CanvasContainer
        canvasElements={canvasElements}
        maxCoordinate={maxCoordinate}
        isElementInCanvas={isElementInCanvas}
        setSelectedElement={updateSelectedItem}
        updateElementPosition={updateElementPosition}
        updateElementText={updateElementText}
        updateCanvasMaxCoordinates={updateCanvasMaxCoordinates}
        removeCanvasElement={removeCanvasElement}
      />
      <ListContainer
        triggerCreateItem={newCanvasElement}
        maxXCoordinate={maxCoordinate.x}
        maxYCoordinate={maxCoordinate.y}
      />
      {selectedElement && (
        <ModalComponent
          selectedElement={selectedElement}
          updateElementValues={updateElementValues}
          cancelUpdateElement={removeSelectedElement}
          maxXCoordinate={maxCoordinate.x}
          maxYCoordinate={maxCoordinate.y}
        />
      )}
    </div>
  );
};

export default HomeScreen;
