import React, { Component } from "react";

export default class ShoppingCart extends Component{
    state = {
        products:[
        { id: 1, productName: "iphone", price :8900, quantity: 0 },
        { id: 2, productName: "Sony Camera", price :4500, quantity: 0 },
        { id: 3, productName: "Samsung QLED TV", price :7745, quantity: 0 },
        { id: 4, productName: "Ipad Pro", price :12400, quantity: 0 },
        { id: 5, productName: "xbox", price :7780, quantity: 0 },
        { id: 6, productName: "Dell Monitor", price :880, quantity: 0 },
        ]
    }
    
    
    render() {
    return(

        <div className="container-fluid">
            <h4> Shopping Cart</h4>

            <div className="row ">
                {this.state.products.map((prod) =>{
                return <Product 
                key={prod.id} 
                product={prod}
                onIncrement= {this.handleIncrement}
                onDecrement={this.handleDecrement}
                >

                <button className="btn btn-primary">Buy Now</button>
                </Product>;
                ;
    
            })}
            </div>
        </div>
    );
 }
 handleIncrement= (product, maxValue) =>{
//  console.log("handleIncrement", product);
 let allProducts = [...this.state.products];
 let index= allProducts.indexOf(product);

 if(allProducts[index].quantity<maxValue){
    allProducts[index].quantity ++;

    this.setState({ products: allProducts});
 }
 
};

 handleDecrement=(product, minValue)=>{
let allProducts = [...this.state.products];
let index= allProducts.indexOf(product);

if(allProducts[index].quantity >= minValue){
    allProducts[index].quantity --;
 
    this.setState({ products: allProducts });

}


};


}