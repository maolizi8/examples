//require('styles/reset.css')
require('components/baidu/header/header.css');
import React from 'react';

class Header extends React.Component {
  constructor(props){
     super(props);
    this.state={
      classfirst:'togle_dian dian_active',
      classsecond:'togle_dian',
      prod_section_sub:'prod_section_sub'
    }
  }
	togleProList(data){
    console.log(data)
    // var temp1=this.state.classfirst;
    // var temp2=this.state.classsecond;
    // this.setState({
    //         classsecond:temp1,
    //         classfirst:temp2
    //     });
  }
  render() {
    return (
      <div>
        <div className='top'>
          <div className='dushu'></div>
          <div className='location'>
            <p>{this.props.location}</p><p>101 轻度污染&nbsp;&or;</p>
          </div>
          <div className='user_pic'></div>
        </div>
        <div className='searchbox'>
          <div className='bdpicture'></div>
          <form className='searchform'>
          <input type='text' name='searchtext' id='searchtext' value='' />
          <input type='button' name='searchbtn' id='searchbt' value='百度一下' />
          </form>
        </div>
        <div className='prod_section'>
          <div className={this.state.prod_section_sub}>
            <div className='prod_list'>
              <a href=''><i className='prod_icons'></i><p>关注</p></a>
              <a href=''><i className='prod_icons'></i><p>新闻</p></a>
              <a href=''><i className='prod_icons'></i><p>小说</p></a>
              <a href=''><i className='prod_icons'></i><p>视频</p></a>
              <a href=''><i className='prod_icons'></i><p>糯米</p></a>
              <a href=''><i className='prod_icons'></i><p>地图</p></a>
            </div>
            <div className='prod_list'>
              <a href=''><i className='prod_icons'></i><p>贴吧</p></a>
              <a href=''><i className='prod_icons'></i><p>图片</p></a>
              <a href=''><i className='prod_icons'></i><p>网址</p></a>
              <a href=''><i className='prod_icons'></i><p>推广</p></a>
              <a href=''><i className='prod_icons'></i><p>音乐</p></a>
              <a href=''><i className='prod_icons'></i><p>畅听</p></a>
            </div>
          </div>
          <div className='prod_togle'>
            <div className={this.state.classfirst} onClick={this.togleProList.bind(this)}></div>
            <div className={this.state.classsecond} onClick={this.togleProList.bind(this)}></div>
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  
};
export default Header;