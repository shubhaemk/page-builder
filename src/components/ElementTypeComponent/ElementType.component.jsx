import { useEffect, useRef } from "react";
import { ReactComponent as MenuSVG } from "../../assets/dots-menu.svg";

import "./ElementType.styles.css";

const ElementTypeComponent = (props) => {
  const { elementType, onItemDragOver } = props;

  /**
   * Ref : Stores current mouse position
   */

  const mousePointerRef = useRef({
    x: 0,
    y: 0,
  });

  /**
   * sets details of drop location and item in main screen
   */

  const onDragEndHandler = () => {
    onItemDragOver(
      elementType,
      mousePointerRef.current.x,
      mousePointerRef.current.y
    );
  };

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

  return (
    <div className="draggable-element" onDragEnd={onDragEndHandler} draggable>
      <MenuSVG className="draggable-element-icon" />
      <span className="draggable-element-title">{elementType}</span>
    </div>
  );
};

export default ElementTypeComponent;
