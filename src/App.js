import React from 'react';
import "./scss/volt.scss";
import "./App.css";
import "./assets/timcss/assets/css/black-dashboard-react.css"
import "./assets/timcss/assets/css/black-dashboard-react.css.map"
import "./assets/timcss/assets/css/black-dashboard-react.min.css"
import "./assets/timcss/assets/css/nucleo-icons.css"


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './components/Orders';
import Navbar from './components';
import TimTable from './components/TimTable';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
return (
	<Router>
<Navbar />
	<Switch>
	
    <Route path='/orders' component={Orders}/>

    <Route path='/timtable' component={TimTable}/>

	<Route path='/login' component={Login}/>

	<Route path='/dashboard' component={Dashboard}/>

	</Switch>
	</Router>
);
}

export default App;
