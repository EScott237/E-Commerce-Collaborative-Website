import React, {Component} from "react";

export default class MainContent extends Component{
    state = {pageTitle: "Customers", customersCount:5};



    render()
    {
        return <div>
            <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}</h4>

            <span className="badge badge-secondary m-2">{this.state.customersCount}</span>

            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
        </div>;
    }
    // Executes when the user clicks on the Refresh Button
    onRefreshClick = () => {
        this.setState({customersCount:7});
    }
}
