import "./alret.css";
export default function Alret({ text, pos }) {
  return (
    <p
      className="alret"
      style={{
        position: "fixed",
        padding: " 5px",
        backgroundColor: "rgb(52, 52, 52)",
        border: "1px solid snow",
        left: pos[0],
        top: pos[1],
      }}
    >
      {text}
    </p>
  );
}
