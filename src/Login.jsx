import React, { Component } from "react";

export default class Login extends Component{

constructor(props){
    super(props);
    this.state = {email:"abc@test.com", password:"abc123"};
}
    render(){
        return(
            <div className="col-lg-9">
                <h4 className="m-1 p-2 border-bottom">Login</h4>

                {/* Email starts */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Email:</label>
                    <input type="text" className="form-control" value={this.state.email} onChange={(event) => { this.setState({ email:event.target.value });
                    console.log(this.state.email);
                    }}
                    />
                </div>
                {/* Email ends */}

                {/* Password starts */}
                <div className="form-group form-row">
                    <label className="col-lg-4">Password:</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={(event) => { this.setState({ password:event.target.value })}}/>
                </div>
                {/* Password ends */}

                <div>
                    <button className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
                </div>
            </div>
        );
    }
    // end of render

    // Executes when the user clicks on Login
onLoginClick = () => {
    console.log(this.state);
};
}