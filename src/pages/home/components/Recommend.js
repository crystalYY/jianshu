import React, {PureComponent} from 'react';
import {RecommendArea} from '../style'

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendArea>
				<a href = '/'><img className = 'recommendImg' src='./images/recommend1.png' alt='recommend' /></a>
				<a href = '/'><img className = 'recommendImg' src='./images/recommend2.png' alt='recommend' /></a>
				<a href = '/'><img className = 'recommendImg' src='./images/recommend3.png' alt='recommend' /></a>
				<a href = '/'><img className = 'recommendImg' src='./images/recommend4.png' alt='recommend' /></a>
			</RecommendArea>
		)
	}
}

export default Recommend;