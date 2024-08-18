import "./App.css";
import Card from "./Portch";

function Portfolio() {
  return (
    <>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="col-4 mt-1">
          <Card title={"Wed Dseign"} color={"dark"} textC={"white"}></Card>
        </div>
        <div className="col-4 mt-1">
          <Card title={"JAVA"} color={"light"} textC={"dark"}></Card>
        </div>
        <div className="col-4 mt-1">
          <Card title={"HTML"} color={"dark"} textC={"white"}></Card>
        </div>
        <div className="col-4 mt-1">
          <Card title={"Css"} color={"light"} textC={"dark"}></Card>
        </div>
        <div className="col-4 mt-1">
          <Card title={"C#"} color={"dark"} textC={"white"}></Card>
        </div>
        <div className="col-4 mt-1">
          <Card title={"Node"} color={"light"} textC={"dark"}></Card>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
