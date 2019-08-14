import React, {PureComponent} from 'react';
import {connect} from 'react-redux'; 
import {
	BannerWrapper
}from '../style.js'

class Banner extends PureComponent {
	constructor(props) {
		super(props);

		this.wrapper = React.createRef();
		this.leftPoint = React.createRef();
		this.rightPoint = React.createRef();
	}
	render() {
		const {
			imgList,
			blurSlide,
			hoverSlide,
			handleLeftPointClick,
			handleRightPointClick
		} = this.props;
		return (
			<BannerWrapper 
				onMouseEnter={()=>{hoverSlide(this.leftPoint,this.rightPoint)}} 
				onMouseLeave = {()=>{blurSlide(this.wrapper,this.leftPoint,this.rightPoint, this)}}
			>				
				<div className='imgWrapper' ref={this.wrapper}>
					{
						imgList.map((item) => {
							return (
								<img 
									className = 'bannerImg' 
									src={item.get('imgSrc')} 
									alt='bannerImage' 
									key={item.get('id')}
								/>
							)
						})
					}
				</div>
				<span 
					className='iconfont iconLeft' 
					ref={this.leftPoint}
					onClick = {()=>{handleLeftPointClick(this.wrapper)}}
				>
					&#xe616;
				</span>
				<span 
					className='iconfont iconRight' 
					ref={this.rightPoint}
					onClick = {()=>{handleRightPointClick(this.wrapper)}}
				>
					&#xe616;
				</span>
			</BannerWrapper> 
		)
	}

	componentDidMount() {
		this.props.bannerSlide(this.wrapper);
	}
	componentWillUnmount() {
		//清除当前页面的计时器
		this.props.clearSlide();
	}
}

const mapStateToProps = (state) => {
	return {
		imgList: state.get('home').get('bannerImg')
	}
}
const mapDispatchToProps = (dispatch) => {
	var timer = null;
	return {
		bannerSlide(wrapper) {
			timer = setInterval(()=>{
				const currentPosition = parseInt(getComputedStyle(wrapper.current,null).getPropertyValue('left'));
				if(currentPosition === (4*-625)){
					wrapper.current.style.left='0px';
				}else{
					wrapper.current.style.left = `${currentPosition-625}px`;
				}
			},5000);
		},
		clearSlide() {
			clearInterval(timer);
		},
		hoverSlide(leftPoint, rightPoint) {
			clearInterval(timer);
			leftPoint.current.style.opacity = '1';
			rightPoint.current.style.opacity = '1';
		},
		blurSlide(wrapper, leftPoint, rightPoint, thisPointer) {
			thisPointer.props.bannerSlide(wrapper);
			leftPoint.current.style.opacity = '0';
			rightPoint.current.style.opacity = '0';
		},
		handleLeftPointClick(wrapper) {
			const currentPosition = parseInt(getComputedStyle(wrapper.current,null).getPropertyValue('left'));
			if(currentPosition === (4*-625)){
				wrapper.current.style.left='0px';
			}else{
				wrapper.current.style.left = `${currentPosition-625}px`;
			}
		},
		handleRightPointClick(wrapper) {
			const currentPosition = parseInt(getComputedStyle(wrapper.current,null).getPropertyValue('left'));
			if(currentPosition === (0)){
				wrapper.current.style.left=`${-625*4}px`;
			}else{
				wrapper.current.style.left = `${currentPosition+625}px`;
			}
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner);