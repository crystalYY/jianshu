import React, {Component}from 'react';
import {connect} from 'react-redux';
import {createActions} from './headerStore';
import {createActions as LoginCreateActions} from '../../pages/login/LoginStore';
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import '../../static/iconfont/Icon.css';
import {
	HeaderWrapper,
	HeaderContainer,
	Additional,
	HeaderItem,
	SearchBox,
	Button,
	HotSearchArea,
	HotSearchItem
}from './style.js'
class Header extends Component {

	getSearchBox() {
		//解构赋值
		const {
			focused, 
			list, 
			searchMouseIn,
			currentPage,
			totlePage, 
			searchboxMouseEnter, 
			searchboxMouseLeave, 
			changePage } = this.props;
		//当ajax取到数据后才进行显示
		if(list){
			//list为一个immutable对象，不能直接使用[]运算符，需要先转成js数组
			const newList = list.toJS();
			const pageList = [];
			let endNum = 0;
			//定义下一次要显示的页码数
			let page = currentPage;
			if(currentPage === totlePage){
				endNum = newList.length;
				page = 1;
			}else{
				endNum = currentPage * 10;
				page++;
			}
			for(let i = (currentPage-1) * 10; i < endNum; i++) {
				pageList.push(<HotSearchItem key = {newList[i]}>{newList[i]}</HotSearchItem>)
			}

			if(focused || searchMouseIn){
				return (
					<HotSearchArea 
						onMouseEnter = {searchboxMouseEnter}
						onMouseLeave = {searchboxMouseLeave}
					>
						<p className='hotSearch'>热门搜索</p>
						<p className='changeOne'
							onClick = {() => changePage(page, this.rotatePointer)}
						>
						<span ref = {this.rotatePointer} className='iconfont'>&#xe61d;</span>
						换一批
						</p>
						<div className='clearfix'>
						{pageList}						
						</div>
					</HotSearchArea>
				)
			}else{
				return null
			}
		}
	}

	constructor(props) {
		super(props);

		this.rotatePointer = React.createRef();
	}

	render () {
		const {focused, loginStatus, handleBoxFocus, handleBoxBlur, exitUser} = this.props;
		return (
			<HeaderWrapper>
				<Link to='/' className='LogoPic'>
				</Link>
				<HeaderContainer className = 'leftCon'>
					<Link to='/'>
						<HeaderItem className = 'homePage' href='/'>首页</HeaderItem>
					</Link>
					<HeaderItem className = 'downloadAPP'>下载APP</HeaderItem>
					<div className ='searchArea'>
						<CSSTransition
							in = {focused}
							timeout = {200}
							classNames = 'sbox'
						>
							<SearchBox placeholder='搜索' 
								onFocus = {handleBoxFocus}
								onBlur = {handleBoxBlur}
							/>					
						</CSSTransition>
						<span className = {focused ? 'focusedBox iconfont': 'iconfont'}>&#xe60c;</span>
						{ this.getSearchBox()}
					</div>

				</HeaderContainer>
				<HeaderContainer className = 'rightCon'>
					<HeaderItem className = 'aa'><span className="iconfont">&#xe636;</span></HeaderItem>
					<HeaderItem className = 'beta'></HeaderItem>
					<HeaderItem> 
						{loginStatus?<Link to='/' className='login' onClick={exitUser}>退出</Link> : <Link to='/login' className='login'>登录</Link>}
					</HeaderItem>
				</HeaderContainer>
				<Additional>
					<Button className = 'reg'>注册</Button>
					<Link to='/postArticle' className='writeLink'>
						<Button className = 'writeArticles'><span className="iconfont">&#xe6a4;</span>写文章</Button>
					</Link>
				</Additional>
			</HeaderWrapper>
		)
	}

	componentDidMount() {
		this.props.getSearchList();
	}
}


const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		list: state.get('header').get('list'),
		searchMouseIn: state.get('header').get('searchMouseIn'),
		currentPage:state.getIn(['header','currentPage']),
		totlePage : state.get('header').get('totlePage'),
		loginStatus:state.get('login').get('login')
	}
}

const mapDispatchToProps = (dispatch) => {
	let rotateFlag = 1;
	return {
		handleBoxFocus() {		
			dispatch(createActions.handleBoxFocusAction());
		},

		handleBoxBlur() {
			dispatch(createActions.handleBoxBlurAction());
		},
		getSearchList() {
			dispatch(createActions.getSearchListAction());
		},
		searchboxMouseEnter() {
			dispatch(createActions.SearchboxMouseEnterAction());
		},
		searchboxMouseLeave() {
			dispatch(createActions.searchboxMouseLeaveAction());
		},
		//传给reducer一个计算好的下一次要显示的页面序号
		changePage(page, rotatePointer) {
			rotatePointer.current.style.transform = 'rotate('+(360*rotateFlag++)+'deg)';		
			dispatch(createActions.changePageAction(page));
		},
		exitUser() {
			dispatch(LoginCreateActions.exitUserAction());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);