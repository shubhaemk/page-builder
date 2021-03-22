import "./Label.styles.css";

const LabelComponent = (props) => {
  const { displayText } = props;

  return (
    <span
      className="label-component"
      style={{ fontSize: "inherit", fontWeight: "inherit" }}
    >
      {displayText}
    </span>
  );
};

export default LabelComponent;
