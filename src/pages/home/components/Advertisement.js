import React, {PureComponent} from 'react';
import {AdWrapper} from '../style';

class Advertisement extends PureComponent {
	render() {
		return (
			<AdWrapper>
				<img className = 'adimg' src='./images/ad1.jpg' alt='ad' />
				<span className = 'adText'>广告</span>
			</AdWrapper>
		)
	}
}

export default Advertisement;