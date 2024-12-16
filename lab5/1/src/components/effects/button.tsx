type ButtonProps = {
  onClick: () => void;
};

function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>Add</button>;
}

export default Button;
