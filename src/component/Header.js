// import './Home.css';
// import Blog from './Blog';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row col-md-8 col-sm-12">
            <a href="" onClick={() => this.props.onChange()}>Home</a>
        </div>
      </div>
    );
  }
}

export default Header;
