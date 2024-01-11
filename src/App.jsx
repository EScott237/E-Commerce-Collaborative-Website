import React, {Component} from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent"
import ShoppingCart from "./ShoppingCart"


export default class App extends Component
{
    render()
    {
        return (<React.Fragment>
                    <NavBar />
                    <MainContent />
                    <ShoppingCart />
                </React.Fragment>
        );
    }
}
