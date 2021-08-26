import "./sass/App.scss";
import image01 from "./images/image01.png";

function App() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img src={image01} alt="" className="card-image" />
      <div className="card-body">
        <h2 className="card-title">Title</h2>
        <p className="card-description">Description</p>
        <h3 className="card-price">00.00</h3>
        <button className="card-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default App;
