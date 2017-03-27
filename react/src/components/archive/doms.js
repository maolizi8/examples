import React from 'react';
class Doms extends React.Component {

constructor(props) {
        super(props);
        this.state = {str: 'hello',value:'inputnone'};
    }

    componentWillMount() {
      
    }

    componentDidMount() {
       
    }


    shouldComponentUpdate() {
      
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
       
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
      
    }

    setTheState (){
    	  this.setState({
            str:this.state.str=='hello'?'Hello':'hello'
        });
    	   this.props.callbackParent(this.state.str);
    	}
 
    forceItUpdate() {
        this.forceUpdate();
    }
    handleChange(event){
    	this.setState({value: event.target.value});
    }
  render() {
 
    return (
    	<div>
    		<p onClick={this.setTheState.bind(this)}>点击我切换：{this.state.str}</p>
       		<input type='text' value={this.state.value } onChange={this.handleChange.bind(this)} />
        	<p>{this.state.value}</p>
      	</div>
    	
    	);
   }
  
}

Doms.defaultProps = {
   
  

};
export default Doms;