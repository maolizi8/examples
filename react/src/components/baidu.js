require('styles/reset.css')
import React from 'react';

import Header from './baidu/header/header'
//import Searchbox from './baidu/search/searchbox'

class Baidu extends React.Component {
   render() {
    return (
    	<div>
    	  <Header location='北京' />
    	</div>
    );
  }
}

Baidu.defaultProps = {
  
};
export default Baidu;
