import {combineReducers} from 'redux-immutable';
import {headerReducer} from '../commen/header/headerStore';
import {homeReducer} from '../pages/home/homeStore';
import {detailStore} from '../pages/detail/detailStore';
import {LoginReducer} from '../pages/login/LoginStore'

export default combineReducers({
		header: headerReducer,
		home: homeReducer,
		detail: detailStore,
		login: LoginReducer
	});
