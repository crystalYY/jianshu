import * as actionTypes from './actionTypes';
import axios from 'axios';

const getArticle = (title, content) =>({
		type: actionTypes.GET_ARTICLE,
		title,
		content
});

export const initArticleAction = (id) => {
	return (dispatch)=> {
		axios.get('/testData/article.json?id='+id).then((res)=>{
			const result =res.data.data;
			dispatch(getArticle(result.title,result.content));
		})
	}
}