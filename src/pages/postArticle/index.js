import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

class PostArticle extends Component{
	render() {
		const {loginStatus,handleLogin} = this.props;
		//如果登录显示写文章页面，未登录显示登录界面
		if(loginStatus){
			return (
				<h3>待开发写文章页面，已做完登录校验</h3>
			)
		}else{
			return <Redirect to='/login' />;
		}
		
	}

}

const mapState = (state) => {
	return {
		loginStatus:state.get('login').get('login')
	}
}

export default connect(mapState, null)(PostArticle);