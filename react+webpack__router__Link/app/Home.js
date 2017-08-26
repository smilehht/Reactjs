import React , { Component } from "react";

import { Router ,Link , Route , hashHistory, IndexRoute , Redirect , IndexRedirect } from 'react-router';



class Home extends React.Component{
	render(){
		return (

		<div className="">
          
          <h1>Home组件</h1>
          <ul>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/repos">Repos</Link></li>
          </ul>
    	</div>
			);
	}
}

export default Home