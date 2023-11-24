import React, {Component} from "react";

export default class MainContent extends Component{
    state = {
        pageTitle: "Customers", 
        customersCount:5,
        customers:[
            {id:1, name: "Scott",phone:"111-111",address:{city:"Miami"},photo:"http://picsum.photos/id/1000/60"},
            {id:2, name: "Jones",phone:"222-222",address:{city:"New York"},photo:"http://picsum.photos/id/1015/60"},
            {id:3, name: "Allen",phone:"333-333",address:{city:"California"},photo:"http://picsum.photos/id/1003/60"},
            {id:4, name: "James",phone:null,address:{city:"Washington"},photo:"http://picsum.photos/id/1019/60"},
            {id:5, name: "John",phone:null,address:{city:"Texas"},photo:"http://picsum.photos/id/1002/60"}
        ]
    };




    render(){
        return (
        <div>
            <h4 className="m-1 p-1">{this.state.pageTitle}

            <span className="badge bg-secondary m-2">{this.state.customersCount}</span>

            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                   {this.getCustomerRow()}
                </tbody>
            </table>
        </div>
        );
    }
    // Executes when the user clicks on the Refresh Button
    onRefreshClick = () => {
        this.setState({customersCount:7});
    };

    getPhoneToRender = (phone) => {
        if (phone) return phone;
        else {
            return <div className="bg-warning p-2 text-center">No phone</div>
        }
    }

    getCustomerRow = () => {
        return( this.state.customers.map((cust, index)=>{
            return(
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td><img src={cust.photo} alt="Customer"/>
                    <div>
                        <button className="btn btn-sm btn-secondary" onClick={() => {this.onChangePictureClick(cust,index);}}>Change Picture</button>
                    </div>
                    </td>
                    <td >{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>  
                    );
                })
                
        );
    }

//Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (custArr, index) => {
    //console.log(cust);
    //console.log(index);

    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    //update "customers" array in the state
    this.setState({ customers: custArr });
  };


};





