import {actionTypes} from './index';
import {fromJS} from 'immutable';
//fromJS 也会把list数组编程immutable对象，所以传进来的action里的数据也需要预先转换为immutable对象
const defaultState = fromJS({
	focused: false,
	list:[],
	searchMouseIn: false,
	currentPage: 1,
	totlePage: 1
});

//导出一个纯函数,运用了immutable之后，返回的就为一个immutable对象，
//也就是在别的文件里面引用state.header就为一个immutable对象
export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.BOX_FOCUS:
			return state.set('focused', true);
		case actionTypes.BOX_BLUR:
			return state.set('focused', false);
		case actionTypes.GET_SEARCH_LIST:
			return state.merge({
				list: action.list,
				totlePage: action.length
			});
		case actionTypes.SEARCHBOX_MOUSE_ENTER:
			return state.set('searchMouseIn', true);
		case actionTypes.SEARCHBOX_MOUSE_LEAVE:
			return state.set('searchMouseIn', false);
		case actionTypes.CHANGE_PAGE:
			return state.set('currentPage', action.page);
		default :
			return state
	}
}