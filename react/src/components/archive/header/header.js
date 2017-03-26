require('components/header/header.css');
import React from 'react';
class Header extends React.Component {
  render() {
    return (
      <header className='head'>{this.props.name}</header>
    
    );
  }
}

// Header.defaultProps = {
// };
export default Header;