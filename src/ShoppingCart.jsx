import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //Executes when the component is mounted
  constructor(props) {
    console.log("constructor - ShoppingCart");
    super(props);
    // initialization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    // console.log("render - ShoppingCart");

    return (
      <div>
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // Render method ends here

  //   Executes after constructor and render method (includes life cycle of child components, if any) of current component
  componentDidMount = async () => {
    // fetch data from data source

    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    console.log(prods);

    this.setState({ products: prods });
    // console.log("componentDidMount - ShoppingCart");
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "componentDidUpdate - ShoppingCart",
    //   prevProps,
    //   prevState,
    //   this.props,
    //   this.state
    // );
    // if (prevProps.x !== this.props.x) {
    //     // make http call
    // }
  }

  //   Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    // console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch - ShoppingCart");
    // console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  // Executes when the user clicks on the + button.
  handleIncrement = (product, maxValue) => {
    // get the index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      // Update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  // Executes when the user clicks on the - button.
  handleDecrement = (product, minValue) => {
    // get the index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      // Update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //   Executes when the user clicks on the Delete (X) button in the Product component.
  handleDelete = (product) => {
    // get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete?")) {
      // Delete product based on the index
      allProducts.splice(index, 1);

      // Update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
