import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

export const handleBoxFocusAction = () => ({
	type: actionTypes.BOX_FOCUS
});
export const handleBoxBlurAction = () => ({
	type: actionTypes.BOX_BLUR
});

export const getSearchListAction = () => {
	return (dispatch) => {
		axios.get('/testData/searchList.json').then( (res) => {
			const data = res.data;
			console.log(typeof data);
			const action = {
				type: actionTypes.GET_SEARCH_LIST,
				list: fromJS(data),
				length: Math.ceil(data.length/10)
			}
			dispatch(action);
		}).catch( (error) => {
			console.log('error!!!' + error);
		})
	}
}

export const SearchboxMouseEnterAction = () => ({
	type: actionTypes.SEARCHBOX_MOUSE_ENTER
});

export const searchboxMouseLeaveAction = () => ({
	type: actionTypes.SEARCHBOX_MOUSE_LEAVE
});

export const changePageAction = (page) => ({
	type: actionTypes.CHANGE_PAGE,
	page
});