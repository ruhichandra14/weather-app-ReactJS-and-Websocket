import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeaderContainer from "../containers/header";
import MainComponent from "../components/main_comp";

import { Switch, Router, Route, HashRouter, BrowserRouter } from 'react-router-dom';


class MainContainer extends Component{

    render(){
        return(
            <React.Fragment>
            <HeaderContainer/>
            <section>
                <BrowserRouter>
                        <Switch>
                           
                        </Switch>
                </BrowserRouter>
                <MainComponent/>
            </section>
        </React.Fragment>
        )
    }
}

export default MainContainer;




