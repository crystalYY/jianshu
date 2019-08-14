import {fromJS} from 'immutable';
import {actionTypes} from '../homeStore';
const defaultState = fromJS({
	bannerImg: [
		{
			id :1,
			imgSrc : './images/banner1.jpg'
		},
		{
			id:2,
			imgSrc : './images/banner2.png'
		},
		{
			id:3,
			imgSrc : './images/banner3.png'
		},
		{
			id:4,
			imgSrc : './images/banner4.png'
		},
		{
			id:5,
			imgSrc : './images/banner5.png'
		}
	],
	listItem: [
		{
			id:0,
			picUrl: "./images/listImg1.jpg",
			title: "微信读书和kindle：该用谁？",
			contents: "最近很多读者和我反映：“微信读书app越做越好了，笔记功能、社交功能、书籍数量、听书等应有尽有。以前我用kindle阅读器看书，现在换成微信读书..."
	}],
	listLength:1,
	currentPosition:1,
	writerItem: [
		{
			id:1,
			picUrl: "./images/writer1.webp",
			writerName: "北美之美",
			writerDetail: "写了439.8k字 · 29.1k喜欢"
		}
	],
	writerItemLength:1,
	writerItemPosition:1
});
export default (state = defaultState, action) => {
	switch(action.type) {
		case actionTypes.INIT_LIST:
			return state.merge({
				'listItem': action.data,
				'listLength': action.listLength,
				'currentPosition': 6
			});
		case actionTypes.SHOW_MORE_LIST:
			return state.merge({
				'listItem': action.data,
				'currentPosition': action.currentPosition
			});
		case actionTypes.INIT_WRITER_LIST:
			return state.merge({
				writerItem: action.data,
				writerItemLength: action.listLength,
				writerItemPosition: 5
			});
		case actionTypes.CHANGE_WRITER_LIST:
			return state.merge({
				writerItem: action.data,
				writerItemPosition: action.currentPosition
			});
		default:
			return state;
	}
}
