// var greeter =  require("./greeter.js");

// document.getElementById("root").appendChild(greeter());

import React from "react";
import {render} from "react-dom";
import Root from './Root.js';
import Children1 from './Child1.js';
import Children2 from './Child2.js';
import Home from "./Home.js";

import { Router , Route , hashHistory, IndexRoute , Redirect , IndexRedirect } from 'react-router';


render( <Router history={ hashHistory } >
			<Route path="/index" component={Root} >
				<IndexRoute component={Home} />
				<Route path="/child1/:id" component={Children2} />
				<Route path="child2" component={Children2} />
			</Route>
				<Route path="about" component={Children2} />
				<Route path='/child2' component={Children2} />
		</Router>
	, document.getElementById("root"));