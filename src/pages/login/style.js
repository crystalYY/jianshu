import styled from 'styled-components';

export const LoginWrapper = styled.div`
	position:absolute;
	top:0;
	left:0;
	bottom:0;
	right:0;
	background-color:#f1f1f1;
	.backHome{
		margin-top:56px;
		margin-left:50px;
		width:100px;
		display: block;
		.logoImg{
			width:100%;
		}
	}
`;

export const LoginArea = styled.div`
	width:400px;
	box-sizing:border-box;
	margin: 60px auto 0;
	padding:50px 50px 30px 50px;
	background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  div{
    position: relative;
  }
  .iconfont{
  	position: absolute;
  	top:14px;
    left: 10px;
  	color: #969696;
  }
  input{
  	box-sizing:border-box;
  	display: block;
  	border:1px solid #c8c8c8;
  	width: 100%;
  	border-radius:4px;
  	height: 50px;
    margin-bottom: 5px;
    padding: 4px 12px 4px 35px;
    background: rgba(181,181,181,.1);
  }
  button{
  	box-sizing:border-box;
  	margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
   	background: #3194d0;
  }
`;

export const HeaderText = styled.p`
	text-align:center;
	margin-bottom:50px;
	span{
		color:#969696;
		font-size: 18px;
		font-weight: 700;
		padding: 10px;
	}
	.loginText{
		color:#ea6f5a;
	}
`;