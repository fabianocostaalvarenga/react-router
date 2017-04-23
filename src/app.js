import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Sobre from './pages/Sobre';

import Curso from './components/Curso';

/*
Por boas praticas, é aconselhável mantermos 
um único arquivo deste (app.js) por onde todos
os outros componentes que criarmos em react 
serão utilizados atravẽs deste.
*/
ReactDOM.render((
		
	  <Router>
		  	<div>
				<nav className="nav has-shadow">
					<div className="nav-left">
						<NavLink to="/" className="nav-item is-tab" activeClassName="is-active"	exact>Home</NavLink>
						<NavLink to="/cursos" className="nav-item is-tab" activeClassName="is-active">Cursos</NavLink>
						<NavLink to="/sobre" className="nav-item is-tab" activeClassName="is-active">Sobre</NavLink>
					</div>
				</nav>

				<Route exact path="/" component={Home}/>
			  	<Route path="/cursos" component={Cursos}/>
		  		<Route path="/sobre" component={Sobre}/>

		  		<Route path="/cursos/:id" component={Curso}/>	

			</div>	
	  </Router>

	),

	document.getElementById("app")

);