import React from 'react';
import Doms from './doms';
import Header from './header/header';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Gql extends React.Component {
	constructor(props) {
        super(props);
        this.state = {str: '首页'};
    }
	onChildChanged(data){
		 this.setState({
            str:data
        });
	}
  render() {
    return (
    	<div>
    	<Header name={this.state.str} />
        <div >这是 {this.state.str} 的内容</div>
         这也是个链接： <Link to='/About'>About</Link>
        <Doms callbackParent={this.onChildChanged.bind(this)} />
      </div>
    );
  }
}

Gql.defaultProps = {
  
};
export default Gql;