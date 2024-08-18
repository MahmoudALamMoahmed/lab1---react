import "./App.css";
export default function Card({ title, color, textC }) {
  return (
    <div
      style={{ height: "200px" }}
      className={`card bg-${color} text-${textC} d-flex justify-content-center align-items-center`}
    >
      <h5 className="d-d-inline">{title}</h5>
    </div>
  );
}
