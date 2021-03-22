import { ReactComponent as MenuSVG } from "../../assets/dots-menu.svg";

import "./ElementType.styles.css";

const ElementTypeComponent = (props) => {
  const { elementType, onItemDragOver } = props;

  /**
   * Used to get details of drop location of element
   * @param {object} event
   */

  const onDragEndHandler = (event) => {
    let { pageX: xCoordinate, pageY: yCoordinate, touches } = event;
    if (touches && touches.length === 1) {
      xCoordinate = touches[0].pageX;
      yCoordinate = touches[0].pageY;
    }

    onItemDragOver(elementType, xCoordinate, yCoordinate);
  };

  return (
    <div className="draggable-element" onDragEnd={onDragEndHandler} draggable>
      <MenuSVG className="draggable-element-icon" />
      <span className="draggable-element-title">{elementType}</span>
    </div>
  );
};

export default ElementTypeComponent;
