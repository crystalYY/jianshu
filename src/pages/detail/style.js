import styled from 'styled-components';

export const DetailWrapper = styled.div`
	width:50%;
	min-width:700px;
	margin: 0 auto;
	h3{
		font-size:34px;
		font-weight:bold;
		color:#333;
		line-height:1.4;
		margin:50px 0 20px;
	}
`;
export const DetailContent = styled.div`
	margin-bottom:60px;
	img{
		width:100%;
		margin-bottom:20px;
	}
	p{
		font-size:16px;
		color:#2f2f2f;
		margin-bottom: 20px;
		line-height:1.4;
	}
	b{
		font-weight:bold;
	}
`;

export const WriterWrapper = styled.div`
	overflow:hidden;
	color:#333;
	margin-top:30px;
	margin-bottom:40px;
	img{
		border-radius:50%;
		width:40px;
		width:40px;
		float:left;
		margin-right:15px;
	}
	h4{
		font-size:16px;
		line-height: 1.5;
		margin-bottom: 5px;
	}
	.addFocus{
		color:#fff;
		text-align: center;
		display: inline-block;
		padding: 0 8px;
		border-radius:10px;
		font-weight: 400;
		font-size:12px;
		background-color: #42c02e;
		cursor: pointer;
		margin-left: 5px;
		.iconfont{
			font-size:12px;
		}
	}
	p{
		font-size:12px;
		color:#969696;
		line-height: 1.5;
		.iconfont{
			font-size: 12px;
			color:#ea6f5a;
		}
	}
`;