import {actionTypes} from './index';
import axios from 'axios';
export const exitUserAction = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: false
});

export const handleLoginAction = (userName, password) => {
	return (dispatch) => {
		//在本地模拟需要配备模拟服务器，比如Charles
		axios.post('/login.json',{userName: 'userName', password: 'password'}).then((res) => {
			console.log(res);
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
			
		}).catch((error)=>{
			console.log(error);
			alert('请刷新重试~');
		})
	}
}