import "./sass/App.scss";
import image01 from "./images/image01.png";
import image02 from "./images/image02.png";
import image03 from "./images/image03.png";
import image04 from "./images/image04.png";

function App() {
  return (
    <div className="container">
      <Card
        img={image01}
        title="Daydream Nation"
        description="Daydream Nation (1988) is the fifth studio album by Sonic Youth."
        price="14.99"
      />
      <Card
        img={image02}
        title="Experimental Jet Set, Trash and No Star"
        description="Experimental Jet Set, Trash and No Star (1994) is the eighth studio album by Sonic Youth."
        price="16.99"
      />
      <Card
        img={image03}
        title="Washing Machine"
        description="Washing Machine (1995) is the ninth studio album by Sonic Youth."
        price="15.99"
      />
      <Card
        img={image04}
        title="Sonic Nurse"
        description="Sonic Nurse (2004) is the thirteenth studio album by Sonic Youth."
        price="17.99"
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <h3 className="card-price">{props.price}</h3>
        <button className="card-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default App;
