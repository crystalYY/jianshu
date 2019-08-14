import React, {PureComponent} from 'react';
import {DownloadAPPArea} from '../style';

class DownloadAPP extends PureComponent {
	constructor(props) {
		super(props);
		this.showImg = React.createRef();
	}
	render() {
		return (
			<DownloadAPPArea 
			onMouseEnter = {()=>{this.showQuickMark(this.showImg)}}
			onMouseLeave = {()=>{this.hideQuickMark(this.showImg)}}
			>
				<div className='bigpicWrapper' ref={this.showImg}>
					<img className='bigpic' src='./images/app.png' alt='downloadAPP' />
				</div>
				<img className='smallpic' src='./images/app.png' alt='downloadAPP' />
				<p className='downloadAPP'>下载简书手机App<span className='iconfont'>&#xe616;</span></p>
				<p className='introduction'>随时随地发现和创作内容</p>
			</DownloadAPPArea>
		)
	}

	showQuickMark(pointer) {
		pointer.current.style.opacity='1';
	}
	hideQuickMark(pointer) {
		pointer.current.style.opacity='0';
	}
}

export default DownloadAPP;