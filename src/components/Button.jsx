import "../styles/Button.css";

export default function Button(props) {
  return (
    <button {...props} className="buttons">
      {props.children}
    </button>
  );
}
