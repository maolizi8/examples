require('./../styles/App.css');
import React from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './gql';
import About from './about';
import News from './news';

class Main extends React.Component {
	constructor(props) {
        super(props);
        this.state = {str: ""};
    }
	onChildChanged(data){
		 this.setState({
            str:data
        });
	}
  render() {
    return (
  <Router>
    <div style={{marginTop:50+'px'}}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/News">News</Link></li>
      </ul>

      <hr/>

       <Route exact path="/" component={App}/>
       <Route path="/About" component={About}/>
       <Route path="/News" component={News}/>
    </div>
  </Router>
    );
  }
}

Main.defaultProps = {
  
};
export default Main;