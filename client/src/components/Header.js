import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
            return;
            case false:
            return <a href="/auth/google" className="link">Login with Google</a>
            default: 
            return [
                <span className="link"> <Payments/> {this.props.auth.credits} </span>,
            ,
            <a href="/api/logout" className="link">Logout</a>]
        }
    }
    
    render(){
        return(
            <div>
            <nav className="navbar navbar-static-top">
			<div className="navbar-header">
				<div id="menu-icon" className="pull-right menu-icon">
					<span></span><span></span><span></span>
				</div>
				<div className="tagline col-xs-4 hidden-sm"> <Link to={this.props.auth ? '/surveys':'/'}
                 className="brand-logo"> 
                 Emaily
                 </Link></div>
				<div className="user-info pull-right">
                <span> vaibhav </span>
                </div>
			</div>
		</nav>
        <div className="sidebar">
        {this.renderContent()}
    </div>
    </div> 

        );
    }
}

function mapStateToProps({auth}){
    return {auth }
}

export default connect(mapStateToProps) (Header);