import React , {Fragment} from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store';
import Header from './commen/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import PostArticle from './pages/postArticle';
import {GlobalStyle} from './style.js';


function App() {
  return (
  	<Provider store={store}>
	    <Fragment>
	      <GlobalStyle />	      
	      <BrowserRouter>
	      	<Fragment>	      		
	      		<Switch>
						  <Route exact path="/login" render={null}/>
						  <Route component={Header}/>
						</Switch>
	      		<Route path='/' exact component = {Home}></Route>
	      		<Route path='/detail/:id' exact component = {Detail}></Route>
						<Route exact path="/login" component = {Login}/>
						<Route exact path="/postArticle" component = {PostArticle}/>
	      	</Fragment>
	      </BrowserRouter>
	    </Fragment>
	  </Provider>
  );
}

export default App;
