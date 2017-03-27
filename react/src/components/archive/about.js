import React from 'react';
import Header from './header/header';
class About extends React.Component {

  render() {
 
    return (
    	<div>
    	<Header name='关于我们' />
    		<div>
    		关于我们
    		</div>
      	</div>
    	
    	);
   }
  
}

About.defaultProps = {
   
  

};
export default About;