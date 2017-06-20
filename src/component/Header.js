import './Header.css';
// import Blog from './Blog';
import React, { Component } from 'react';

class Header extends Component {
  render() {
      return (
          <div style={{"borderTop":"1px solid rgba(0,0,0,.44)","borderBottom":"1px solid rgba(0,0,0,.44)", "padding":"10px 0px"}}>
                  <a href="" onClick={() => this.props.onChange()}>Home</a>
                  <a href="" onClick={() => this.props.onChange()}>Technology</a>
                  <a href="" onClick={() => this.props.onChange()}>Creativity</a>
              </div>
      );
  }
}

export default Header;
