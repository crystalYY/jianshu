import React, {PureComponent} from 'react';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import HomeList from './components/HomeList';
import Banner from './components/Banner';
import Advertisement from './components/Advertisement';
import DownloadAPP from './components/DownloadAPP'
import {
	HomeContainer,
	LeftContainer,
	RightContainer,
	BackTop
}from './style.js';

class Home extends PureComponent{

	constructor(props) {
		super(props);
		this.icon = React.createRef();
	}

	render() {
		return (
			<HomeContainer>
				<LeftContainer>
					<Banner />
					<HomeList />
				</LeftContainer>
				<RightContainer>
					<Recommend />
					<DownloadAPP />
					<Advertisement />
					<Writer />
					<Advertisement />
				</RightContainer>
				<BackTop 
					onClick={this.BackToTop} 
					ref = {this.icon}
				>
					<span className='iconfont'>&#xe616;</span>
				</BackTop>
			</HomeContainer>
		)
	}

	componentDidMount() {
		console.log(this.icon.current);
		window.addEventListener('scroll',()=> this.showIcon(this.icon));
	}
	componentWillUnmount() {
		window.removeEventListener('scroll',()=> this.showIcon(this.icon));

	}

	BackToTop() {
		window.scrollTo(0,0);
	}
	showIcon(icon) {
		//用了路由之后会报错，目前为止原因，用了判断解决
		if(icon.current!== null){
			let heightTop = document.documentElement.scrollTop||document.body.scrollTop;
			if(heightTop > 300){
				icon.current.style.opacity='1';
			}else{
				icon.current.style.opacity='0';
			}
		}	
	}
}

export default Home;