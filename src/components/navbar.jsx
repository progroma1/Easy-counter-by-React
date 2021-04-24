import React, { Component } from 'react';

//Stateless functional component
const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar {"  "}
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                    </a>
                 </div>
            </nav>
    );
}


 
export default NavBar;