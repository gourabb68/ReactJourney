import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
export const Header =(props) =>{
    return (
     <header className="header">     
     <div className="content-container">
        <div className="header__content">
     <Link className="header__title" to="/dashboard" >
        <h1>Expensify</h1>
         </Link>           
        {/* <NavLink to="/create"activeClassName="is-active">Create Page</NavLink> */}
        <button className="button button__link" onClick={props.startLogout}>Logout</button>
        </div>
     </div>
     </header>
    ); 
 };

 const mapDispatchToProps =(dispatch)=>({
    startLogout : () => dispatch(startLogout())
 })
 export default connect(undefined,mapDispatchToProps)(Header);