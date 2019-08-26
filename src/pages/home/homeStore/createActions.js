import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initListAction = () =>{
	return (dispatch)=>{
		axios.get('./testData/list.json').then((res)=>{
			const origindData = JSON.parse(JSON.stringify(res.data));
			const len = origindData.length;
			const data = [];
			for(let i = 0; i< 6; i++){
				data.push(origindData[i]);
			}
			const action = {
				type: actionTypes.INIT_LIST,
				data: fromJS(data),
				listLength:len
			};
			dispatch(action);
		})
	}
}

export const showMoreListAction = (curPos, len) => {
	return (dispatch) => {
		axios.get('./testData/list.json').then((res)=>{
			const origindData = JSON.parse(JSON.stringify(res.data));
			const data = [];
			let currentPosition = curPos;
			if(curPos < len){
				if(curPos+6 <= len){
					for(let i = 0; i < curPos+6; i++){
						data.push(origindData[i]);
					}
					currentPosition = curPos+6;
				}
				else{
					for(let i = 0; i < len; i++){
						data.push(origindData[i]);
					}
					currentPosition = len;
				}
				const action ={
					type:actionTypes.SHOW_MORE_LIST,
					data: fromJS(data),
					currentPosition: currentPosition
				};
				dispatch(action);
			}else{
				const action ={
					type:actionTypes.SHOW_MORE_LIST,
					data: fromJS(origindData),
					currentPosition: currentPosition
				};
				dispatch(action);
			}
			
			
		})
	}
}

export const initWriterListAction = () =>{
	return (dispatch)=>{
		axios.get('./testData/writerList.json').then((res)=>{
			const origindData = JSON.parse(JSON.stringify(res.data));
			const len = origindData.length;
			const data = [];
			for(let i = 0; i< 5; i++){
				data.push(origindData[i]);
			}
			const action = {
				type: actionTypes.INIT_WRITER_LIST,
				data: fromJS(data),
				listLength:len
			};
			dispatch(action);
		})
	}
}

export const changeWriterListAction = (curPos, len) => {
	return (dispatch) => {
		axios.get('/testData/writerList.json').then((res)=>{
			const origindData = JSON.parse(JSON.stringify(res.data));
			const data = [];
			let currentPosition = curPos;
			if(curPos < len){
				if(curPos+5 <= len){
					for(let i = curPos; i < curPos+5; i++){
						data.push(origindData[i]);
					}
					currentPosition = curPos+6;
				}
				else{
					for(let i = curPos; i < len; i++){
						data.push(origindData[i]);
					}
					currentPosition = len;
				}
				const action ={
					type:actionTypes.CHANGE_WRITER_LIST,
					data: fromJS(data),
					currentPosition: currentPosition
				};
				dispatch(action);
			}else{
				for(let i = 0; i < 5; i++){
						data.push(origindData[i]);
				}
				const action ={
					type:actionTypes.CHANGE_WRITER_LIST,
					data: fromJS(data),
					currentPosition: 5
				};
				dispatch(action);
			}
			
			
		})
	}
};

export const handleFocusClickAction = (id,focusState) => {
	return (dispatch) =>{
		axios({
			method: 'post',
			url: '/testData/writerList.json',
			data: {
				id,
				focusState
			}
		}).then((res)=>{
			const data = res.data;
			const action = {
				type: actionTypes.HANDLE_FOCUS,
				data: fromJS(data)
			};
			dispatch(action);
			console.log(data);
		}).catch((error)=>{
			console.log(error);
		})
	}
};
