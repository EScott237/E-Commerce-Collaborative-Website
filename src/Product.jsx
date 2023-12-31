import React, { Component } from "react";

export default class Product extends Component {
state = { 
    product: this.props.product
};

    render(){
        console.log(this.props);

        return (
            <div className="col-lg-6">
             <div className="card m-2">
              <div className="card-body">
               <div className="text-muted">#{this.state.product.id}</div>

    <h5 className="pt-2 border-top">
        {this.props.productName}
        </h5>

<div>${this.props.price} </div> 
</div>

<div className="card-footer">
    <div className="float-left">
        <span className="badge">{this.state.product.quantity}</span>

<div className="btn-group">
<button 
className="btn btn-outline-success"
onClick={() => {this.props.onIncrement(this.state.product, 10);}}
>
 +
</button>

<button 
className="btn btn-outline-success"
onClick={() => {
    this.props.onDecrement(this.state.product, 0);
}}
>
 -
</button>
 </div>
</div>

<div className="float-right">{this.props.children}</div>
   </div>
  </div>
 </div>
        );
    }
}