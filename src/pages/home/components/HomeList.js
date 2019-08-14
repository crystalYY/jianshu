import React, {PureComponent} from 'react';
import {ContentListWrapper, ShowMore} from '../style';
import {connect} from 'react-redux';
import {createActions} from '../homeStore';
import {Link} from 'react-router-dom';

class HomeList extends PureComponent {
	constructor(props) {
		super(props);

		this.showMore = React.createRef();
	}
	render() {
		const {
			currentPosition,
			listLength,
			listItem,
			showMoreList
		} = this.props;
		return (
			<div>
				<ContentListWrapper>
					{
						
							listItem.map((item) => {
								return (
									<li className='listItem haveImg' key={item.get('id')}>					
										<div className='content'>
											<h3>
												<Link to={'/detail/'+item.get('id')} className='listHerf'>
													{item.get('title')}
												</Link>
											</h3>
											<p className='listPrap'>{item.get('contents')}</p>
											<div className='meta'>
											<span className='iconfont diamond'>&#xe63d; 6.2</span>
											<span className='writerName'>风w秋w寒</span>
											<span className='iconfont'>&#xe62f; 0</span>
											<span className='iconfont'>&#xe601; 37</span>
											</div>
										</div>
										<img src={item.get('picUrl')}  className='itemImg' alt='itemImage'/>
									</li>
								)
							})
				
						
					}
				</ContentListWrapper>
				<ShowMore
					ref={this.showMore}
				>
					<span 
					 className='readMore'
					 onClick={()=>{showMoreList(currentPosition,listLength,this.showMore)}}>阅读更多</span>
				</ShowMore>
			</div>
		)
	}

	componentDidMount() {
		this.props.initList();
	}
}

const mapStateToProps = (state) => {
	return {
		listItem: state.get('home').get('listItem'),
		currentPosition: state.get('home').get('currentPosition'),
		listLength : state.get('home').get('listLength')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		initList() {
			dispatch(createActions.initListAction());
		},
		showMoreList(curpos, len, showMorePoint) {
			if(curpos < len){
				const action = createActions.showMoreListAction(curpos,len);
				dispatch(action);
			}else{
				showMorePoint.current.style.opacity='0';
			}
			
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeList);