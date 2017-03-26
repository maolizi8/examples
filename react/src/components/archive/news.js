import React from 'react';
import Header from './header/header';
class News extends React.Component {

  render() {
 
    return (
    	<div>
    	<Header name='新闻' />
        <div>
            新闻
        </div>
        </div>
        );
   }
  
}

News.defaultProps = {
   
  

};
export default News;