import StyledAlert from "./Alert.styled";

function Alert(props) {
  return (
    <StyledAlert>
      <p className='form__error'>{props.children}</p>
    </StyledAlert>
  );
}

export default Alert;
