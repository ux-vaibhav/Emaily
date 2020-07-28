// React Router

import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

   render(){
    return(
        <div className="container">
        <BrowserRouter>
           <div>
           <Header/>
           <Route path="/" component={Landing} exact={true}></Route>
           <Route path="/surveys" component={Dashboard} exact></Route>
           <Route path="/surveys/new" component={SurveyNew}></Route>
           </div>
        </BrowserRouter>
        </div>
    );
   }
};


export default connect(null,action)(App);