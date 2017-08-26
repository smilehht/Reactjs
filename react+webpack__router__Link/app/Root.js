// module.exports=function(){
// 	var greet=document.createElement("div");
// 	greet.textContent="hi,this is the first project!";
// 	return greet;
// };


import React,{Component} from 'react';
import Home from "./Home.js";
// import Child2 from "./child2.js";
import main from "./main.css";


class Root extends React.Component{
	render() {
		return (

		 <div id="app" className={main.parent}>
		    根组件
		    {this.props.children  }
		</div>

			);
	}
}

export default Root;