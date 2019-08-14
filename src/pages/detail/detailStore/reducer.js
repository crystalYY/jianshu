import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	title: "",
	content: ""
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.GET_ARTICLE:
			return state.merge({
				title:action.title,
				content:action.content
			})
		default:
			return state;
	}
	
}