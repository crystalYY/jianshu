import styled from 'styled-components';
import LogoImg from '../../static/logo.png';
import Beta from '../../static/beta.png';

export const HeaderWrapper = styled.header`
		display:flex;
		border-bottom: 1px solid #eee;
		min-width: 1060px;
		flex-flow: row wrap;
		height: 56px;
		box-sizing: border-box;
		.LogoPic{
			flex: 1;
			display: block;
			cursor: pointer;
			background: url(${LogoImg});
			background-size: contain;
			background-repeat: no-repeat;
		}
`;


export const HeaderContainer = styled.nav`
	display: flex;
	flex-flow: row;
	align-items: center;
	&.leftCon{
		flex: 3;
		.homePage{
			float:left;
		}
		.downloadAPP{
			padding: 0 20px;
			float:left;
		}
		.searchArea{
			float:left;
			position: relative;
		}
	}
	&.rightCon{
		flex: 2;
		justify-content: flex-end;
		padding: 0 20px;
	}
	.iconfont{
		margin-left: -30px;
		height: 26px;
		width: 26px;
		border-radius: 13px;		
		line-height: 26px;
		text-align: center;
		&.focusedBox{
			padding:5px;
			background-color: #666;
			color:#fff;
		}
	}
`;

export const HeaderItem = styled.div`
 //p{
 	text-decoration: none;
	font-size:17px;
	line-height:26px;
	padding: 15px;
	cursor: pointer;
	&.homePage{
  	color: #ea6f5a;
	}
	&.downloadAPP{
  	color: #333;
	}
	&.beta{
		width:60px;
		background: url(${Beta});
		background-size: contain;
		background-repeat: no-repeat;
	}
	.login{
		font-size:15px;
		color: #969696;
		text-decoration: none;
		font-size:17px;
	}

//}
`;

export const SearchBox = styled.input`
	//p{
		height: 38px;
		border:1px solid #eee;
		background: #eee;
		font-size: 14px;
		border-radius: 19px;
		outline: none;
		padding: 0 35px 0 15px;
		box-sizing: border-box;

		&.sbox-enter{
			padding-right: 35px;
		}
		&.sbox-enter-active{
			padding-right: 50px;
			transition: all 0.5s ease-in-out;
		}
		&.sbox-enter-done{
			padding-right: 50px;
			transition: all 0.5s ease-in-out;
		}
		&.sbox-exit{
			padding-right: 50px;
		}
		&.sbox-exit-active{
			padding-right: 35px;
			transition: all 0.5s ease-in-out;
		}
		&.sbox-exit-done{
			padding-right: 35px;
			transition: all 0.5s ease-in-out;
		}

//}
`;

export const HotSearchArea =styled.div`
	//p{
		position: absolute;
		top: 58px;
		width: 90%;
		padding: 20px 20px 10px 20px;
		border: 1px solid #f0f0f0;
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
		background:#fff;
		z-index:9999;
		.hotSearch{
			float: left;
			font-size: 14px;
			color: #969696;
			line-height: 16px;
		}
		.changeOne{
			float: right;
			font-size: 12px;
			color: #969696;
			cursor:pointer;
			line-height: 16px;
			.iconfont{
				display:inline-block;
				font-size: 12px;
				margin-left: 18px;
				line-height: 16px;
				transition:transform 0.3s ease-in;
				transform-origin: center;
				transform: rotate(0deg);
			}

		}
		.clearfix{
			clear: both;
			margin-top: 30px;
		}
		&::before{
			content: '';
			width: 0px;
			height: 0px;
			display: block;		
			position: absolute;
			top: -15px;
			left: 40px;
  		border-right: 15px solid transparent;
  		border-bottom: 15px solid white;
  		border-left: 15px solid transparent;
		}

	//}
`;

export const HotSearchItem = styled.a`
	//p{
	box-sizing: border-box;
	padding: 2px 6px;
	font-size: 12px;
	margin: 5px;
	border-radius: 3px;
	border:1px solid #ddd;
	color: #787878;
	cursor: pointer;
	float:left;
	//}
`;
export const Additional = styled.div`
	flex: 1.5;
	display: flex;
	align-items: center;
	justify-content: space-around;
	.reg{
		width:80px;
	}
	.writeArticles{

		width:100px;
	}
	.writeLink{
		text-decoration:none;
	}
`;

export const Button = styled.a`
	//p{
		flex:1;
		border: 1px solid #ea6f5a;
		font-size:16px;
		height: 38px;
		line-height: 26px;
		box-sizing: border-box;
		margin: 0 10px;
		border-radius: 19px;
		cursor: pointer;
		text-decoration:none;
		&.reg{
			color:#ea6f5a;
			padding: 6px;
			text-align: center;
		}
		&.writeArticles{

			color:#fff;
			background: #ea6f5a;
			padding: 6px 12px;
			text-align: center;
		}
	//}
`;