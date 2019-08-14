import styled from 'styled-components';

export const HomeContainer = styled.div`
	min-width:1000px;
	width: 64%;
	margin: 30px auto;
	overflow:hidden;
`;

export const LeftContainer = styled.div`
	float:left;
	width:62%;
`;

export const RightContainer = styled.div`
	float: right;
	width:28%;
`;

export const BackTop = styled.div`
	opacity:0;
	position:fixed;
	bottom: 50px;
	right:50px;
	width:50px;
	height:50px;
	border:1px solid #dcdcdc;
	line-height:50px;
	text-align:center;
	cursor:pointer;
	.iconfont{
		font-size:20px;
		display: block;
		transform:rotate(270deg);
	}
`;

//Banner
export const BannerWrapper = styled.div`
	width:625px;
	height:270px;
	border-radius:6px;
	overflow:hidden;
	margin:0 auto;
	margin-bottom: 30px;
	position:relative;
	.imgWrapper{
		position: absolute;
		left: 0px;
		width: 3125px;
		height: 100%;
		transition: left 1s ease-in-out;
		.bannerImg{
			width:625px;
			height:270px;
			float: left;
		}
	}
	.iconLeft{
		opacity: 0;
		position: absolute;
		top: 40%;
		width: 40px;
		height: 50px;
		font-size: 20px;
		color: #fff;
		box-shadow: 0 1px 2px rgba(0,0,0,.6);
		line-height: 50px;
		text-align: center;
		background:rgba(0,0,0,0.4);
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
		transform-origin: center center;
		transform: rotate(180deg);
		cursor: pointer;
		display: block;
		
	}
	.iconRight{
		opacity: 0;
		position: absolute;
		top: 40%;
		right: 0;
		width: 40px;
		height: 50px;
		font-size: 20px;
		color: #fff;
		box-shadow: 0 1px 2px rgba(0,0,0,.6);
		line-height: 50px;
		text-align: center;
		background:rgba(0,0,0,0.4);
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
		cursor: pointer;
		display: block;
	}
`;

//homeList

export const ContentListWrapper=styled.ul`
	.listItem{
		width: 100%;
		margin-bottom:15px;
		padding-bottom: 20px;
		border-bottom: 1px solid #f0f0f0;
		display: flex;
		flex: row wrap;
		align-items: center;
		justify-content: space-between;
		.itemImg{
			flex-basis:150px;
			height: 100px;			
		}
		.content{
			box-sizing: border-box;
			line-height: 1.5;
			.listHerf{
				width: 100%;
				text-decoration: none;
				color:#333;
				font-size: 18px;	
				font-weight: 700;
				line-height: 1.5;	
				display: block;
				margin-bottom: 5px;	
			}
			.listPrap{
				color: #999;
				font-size: 14px;
				line-height: 1.5;
			}
		}
		.meta{
			.writerName{
				font-size: 12px;
				color: #999;
				margin-right: 10px;
			}
			.iconfont{
				font-size: 12px;
				color: #999;
				margin-right: 10px;
			}
			.diamond{
				color:red;
				
			}
		}
	}
`;

export const ShowMore = styled.div`
	width:100%;
	border-radius:20px;
	background:#a5a5a5;
	text-align:center;
	padding: 10px;
	box-sizing:border-box;
	margin-top:30px;
	margin-bottom: 60px;
	.readMore{
		color:#fff;
		text-decoration:none;
		font-size:15px;
		display:block;
		cursor:pointer;
	}

`;

//recommend
export const RecommendArea = styled.div`
	width:100%;
	.recommendImg{
		display:block;
		height: 50px;
		margin-bottom:6px;
		border-radius: 4px;
		cursor: pointer;
	}
`;
//downloadAPP
export const DownloadAPPArea = styled.div`
	width:100%;
	height:82px;
	padding:10px 20px;
	position:relative;
	border-radius:6px;
	border:1px solid #f0f0f0;
	box-sizing:border-box;
	.smallpic{
		width:60px;
		height:60px;
		float:left;
	}
	.bigpicWrapper{
		opacity: 0;
		position:absolute;
		width: 150px;
		height: 150px;
		box-sizing:border-box;
		padding:10px;
		background-color: #fff;
		left:20%;
		top:-160px;
		display: flex;
		align-items: center;
		justify-content: center;
		border:1px solid #777;
		border-radius:6px;
	}
	.bigpic{

		width:100px;
		height:100px;		
	}
	.downloadAPP{
		color:#333;
		font-size:16px;
		margin-left: 70px;
		margin-top: 10px;
	}
	.introduction{
		color:#999;
		font-size:14px;
		margin-top: 3px;
		margin-left: 70px;
	}
`;

//advertisement
export const AdWrapper = styled.div`
	width:100%;
	height:160px;
	position:relative;
	background-color:#fff;
	margin:20px 0;
	cursor:pointer;
	.adimg{
		display: block;
		width:100%;
		height: 100%;
		border-radius:6px;
	}
	.adText{
		position:absolute;
		font-size:12px;
		line-height: 20px;
		text-align: center;
		color: #fff;
		background-color: #000;
		padding: 0 5px;		
		bottom: 0px;
		right:0px;
	}
`;

//writer
export const WriterWrapper=styled.div`
	.writerHeader{
		color: #969696;
		font-size:14px;
		overflow: hidden;
		.changeWriter{
			cursor:pointer;
			float: right;
			font-size:14px;
		}
		.iconfont{
			font-size:14px;
		}
	}
	.showAll{
		text-decoration: none;
		width: 100%;
		color: #787878;
		background-color: #f7f7f7;
		font-size: 14px;
		text-align: center;
		border-radius:6px;
		margin-top: 20px;
		padding:7px 7px 12px 7px;
		display: block;
	}
`;
export const WriterItem=styled.li`
	list-style:none;
	line-height:20px;
	margin-top:20px;
	overflow:hidden;
	.writerImages{
		border-radius:50%;
		width: 48px;
		padding:0 10px 0 0;
		float: left;
	}
	.writerName{
		text-decoration: none;
		color: #333;
		font-size:14px;
	}
	.addFocus{
		cursor: pointer;
		float: right;
		color: #42c02e;
		font-size:14px;
		.iconfont{
			color: #42c02e;
			font-size:14px;
		}
	}
	.writerDetail{
		color: #969696;
		font-size:12px;
	}
`;