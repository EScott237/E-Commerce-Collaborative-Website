import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Erika",
        phone: "123-456-7890",
        address: { state: "Virginia" },
        photo: "https://picsum.photos/id/108/60",
      },
      {
        id: 2,
        name: "Jose",
        phone: "982-014-9363",
        address: { state: "Rhode Island" },
        photo: "https://picsum.photos/id/43/60",
      },
      {
        id: 3,
        name: "Aleska",
        phone: "894-792-7893",
        address: { state: "Florida" },
        photo: "https://picsum.photos/id/287/60",
      },
      {
        id: 4,
        name: "Wesley",
        phone: null,
        address: { state: "Florida" },
        photo: "https://picsum.photos/id/96/60",
      },
      {
        id: 5,
        name: "Manny",
        phone: null,
        address: { state: "California" },
        photo: "https://picsum.photos/id/154/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-dark m-2">{this.state.customersCount}</span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //   Executes when the user clicks on the Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">Not Provided</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.state}</td>
        </tr>
      );
    });
  };

  // Executes when the user clicks on "Change Picture" button in the grid
  // Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    // Get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/777/60";

    // Update "customers" array in the state
    this.setState({ customers: custArr });
  };
}
