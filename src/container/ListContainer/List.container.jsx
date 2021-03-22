import ElementTypeComponent from "../../components/ElementTypeComponent/ElementType.component";

import "./List.styles.css";

/**
 * Default list of elements to be rendered in List Container
 */

const elementTypeList = [
  {
    elementId: 1,
    elementType: "label",
  },
  {
    elementId: 2,
    elementType: "input",
  },
  {
    elementId: 3,
    elementType: "button",
  },
];

const ListContainer = (props) => {
  const { triggerCreateItem, maxXCoordinate, maxYCoordinate } = props;

  /**
   * Validates if drop location is canvas and triggers creation of element
   * @param {string} localElementType - Type of element (label/input/button)
   * @param {number} xCoordinate - X Coordinate of element dropped
   * @param {number} yCoordinate - Y Coordinate of element dropped
   */

  const onItemDragOver = (localElementType, xCoordinate, yCoordinate) => {
    const isELementPlaceValid =
      xCoordinate >= 0 &&
      yCoordinate >= 0 &&
      xCoordinate < maxXCoordinate &&
      yCoordinate < maxYCoordinate;

    if (isELementPlaceValid) {
      triggerCreateItem(localElementType, xCoordinate, yCoordinate);
    }
  };

  return (
    <div className="list-container">
      <span className="list-container-title">Blocks</span>
      {elementTypeList.map((detail) => {
        const { elementId, elementType } = detail;
        return (
          <ElementTypeComponent
            key={elementId}
            elementType={elementType}
            onItemDragOver={onItemDragOver}
          />
        );
      })}
    </div>
  );
};

export default ListContainer;
