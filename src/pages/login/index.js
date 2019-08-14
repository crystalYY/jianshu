import React, {Component} from 'react';
import {LoginWrapper, LoginArea, HeaderText} from './style';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {createActions} from './LoginStore';

class Login extends Component{
	constructor(props) {
		super(props);
		this.userName = React.createRef();
		this.password = React.createRef();
	}
	render() {
		const {loginStatus,handleLogin} = this.props;
		//如果没登录显示登录页面，登录了显示主页
		if(!loginStatus){
			return (
				<LoginWrapper>
					<Link to='/' className='backHome'><img className='logoImg' src='/images/login.png' alt='logo' />
					</Link>
					<LoginArea>
						<HeaderText><span className='loginText'>登录</span><span>·</span><span>注册</span></HeaderText>
						<div><span className='iconfont'>&#xe663;</span><input ref={this.userName} placeholder='手机号或邮箱' /></div>
						<div><span className='iconfont'>&#xe640;</span><input ref={this.password} placeholder='密码' type="password"/></div>
						<button onClick={()=> handleLogin(this.userName.current.value, this.password.current.value)}>登录</button>
					</LoginArea>
				</LoginWrapper>
			)
		}else{
			return <Redirect to='/' />;
		}
		
	}

}

const mapState = (state) => {
	return {
		loginStatus:state.get('login').get('login')
	}
}
const mapDispatch = (dispatch) => {
	return {
		handleLogin(userName, password) {
			dispatch(createActions.handleLoginAction(userName, password));
		}
	}
}

export default connect(mapState, mapDispatch)(Login);