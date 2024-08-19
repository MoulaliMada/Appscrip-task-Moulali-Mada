import { Component } from "react";
import Strip from "../Strip";
import NavBar from "../NavBar";
import ProductItem from "../ProductItem";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class AppscriptHome extends Component {
  state = {
    productsDetails: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok === true) {
      const fetchedData = await response.json();
      const updatedData=fetchedData.map(each=> ({...each,isLiked:false}))
      this.setState({
        productsDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      });
    }
  };

  render() {
    const { productsDetails } = this.state;
    return (
      <div className="home-container">
        <Strip />
        <NavBar />
        <div className="home-sm-container">
          <p className="home-shop-text">
            <span className="span-text">HOME</span>SHOP
          </p>
        </div>
        <div className="home-discover-container">
          <h1 className="home-heading">DISCOVER OUR PRODUCTS</h1>
          <p className="home-paragraph">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <hr />
        <div>
          <button>FILTER</button>
          <select>
            <option>recommended</option>
            <option>Newest first</option>
            <option>popular</option>
            <option>Price : high to low</option>
            <option>Price : low to high</option>
          </select>
        </div>
        <hr />
        <ul className="home-product-ul">
          {productsDetails.map((eachProduct) => (
            <ProductItem key={eachProduct.id} product={eachProduct}/>
          ))}
        </ul>
      </div>
    );
  }
}
export default AppscriptHome;
