import React, {Component} from 'react';
import {DetailWrapper, DetailContent, WriterWrapper} from './style';
import {connect} from 'react-redux';
import {createActions} from './detailStore';
import {withRouter} from 'react-router-dom';

class Detail extends Component{
	render() {
		return (
			<DetailWrapper>
				<h3>{this.props.title}</h3>
				<WriterWrapper>
					<img src='/images/detailWriter.jpg' alt='detailWriter' />
					<h4>素描小五<span className='addFocus'><span className='iconfont'>&#xe644;</span>关注</span></h4>					
					<p><span className='iconfont'>&#xe63d;</span> 13.9 2019.02.27 14:20 字数 1351 阅读 2068评论 7喜欢 47</p>
				</WriterWrapper>
				<DetailContent dangerouslySetInnerHTML={{__html:this.props.content}} />
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.initArticle(this.props.match.params.id);
	}
}

const mapState = (state) => {
	return {
		title: state.getIn(['detail','title']),
		content: state.getIn(['detail','content'])
	}
}
const mapDispatch = (dispatch) => {
	return {
		initArticle(id) {
			dispatch(createActions.initArticleAction(id));
		}
	}
}

export default connect(mapState, mapDispatch)(withRouter(Detail));