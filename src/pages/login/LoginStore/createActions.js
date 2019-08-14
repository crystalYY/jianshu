import {actionTypes} from './index';
import axios from 'axios';
export const exitUserAction = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: false
});

export const handleLoginAction = (userName, password) => {
	return (dispatch) => {
		axios.get('/testData/login.json?userName=' + userName +'&password=' + password).then((res) => {
			const result = res.data.data;
			if(result){
				const action ={
					type: actionTypes.HANDLE_LOGIN,
					value: true
				};
				dispatch(action);
			}else{
				alert('登录失败！');
			}
			
		}).catch(()=>{
			alert('请刷新重试~');
		})
	}
}