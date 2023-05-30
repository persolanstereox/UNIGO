const FormButton = (props) => {
  return (
    <button
      className={props.styles}
      onClick={props.onClick}
      name={props.name}
      value={props.data}
    >
      {props.data}
    </button>
  );
};

export default FormButton;
