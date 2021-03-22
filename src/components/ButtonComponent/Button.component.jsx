import "./Button.styles.css";

const ButtonComponent = (props) => {
  const { displayText, onClickFunction } = props;
  /**
   * This event checks if any onclick function is passed form parent and triggers it if present
   * @param {object} event
   */

  const onClickHandler = (event) => onClickFunction && onClickFunction(event);
  return (
    <button
      className="button-component"
      onClick={onClickHandler}
      style={{ fontSize: "inherit", fontWeight: "inherit" }}
    >
      {displayText}
    </button>
  );
};

export default ButtonComponent;
