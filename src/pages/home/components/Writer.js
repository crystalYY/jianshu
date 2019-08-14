import React, {PureComponent} from 'react';
import {WriterWrapper, WriterItem} from '../style';
import {connect} from 'react-redux';
import {createActions} from '../homeStore'; 

class Writer extends PureComponent {
	
	render() {
		const {
			writerList,
			writerLength,
			currentWriter,
			changeWriterList
		} = this.props;
		return (
			<WriterWrapper>
				<p className='writerHeader'>推荐作者
					<span className='changeWriter' onClick={()=>{changeWriterList(currentWriter, writerLength)}}>
						<span className='iconfont'>&#xe61d;</span>
						换一批
					</span>
				</p>
				{
					writerList.map((item)=>{
						return (
							<WriterItem key={item.get('id')}>
								<a href='/'><img className='writerImages' src={item.get('picUrl')} alt='writerImages' /></a>
								<a href='/' className='writerName'>{item.get('writerName')}</a>
								<span className='addFocus'><span className='iconfont'>&#xe644;</span>关注</span>
								<p className = 'writerDetail'>{item.get('writerDetail')}</p>					
							</WriterItem>
						)
					})
				}
				
				<a href='/' className='showAll'>查看全部<span className='iconfont'>&#xe616;</span></a>
			</WriterWrapper>
		)
	}
	componentDidMount() {
		this.props.initWriterList();
	}
}

const mapStateToProps = (state) => {
	return {
		writerList: state.get('home').get('writerItem'),
		writerLength: state.get('home').get('writerItemLength'),
		currentWriter: state.get('home').get('writerItemPosition')
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		initWriterList() {
			dispatch(createActions.initWriterListAction());
		},
		changeWriterList(cur, len) {
			dispatch(createActions.changeWriterListAction(cur,len));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Writer);