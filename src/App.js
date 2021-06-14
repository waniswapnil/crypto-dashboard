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
import Dashboard from './components/Dashboard';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import 'ui-neumorphism/dist/index.css'


function App() {
return (
	<Router>
<Navbar />
	<Switch>
	
    <Route path='/orders' component={Orders}/>

	<Route path='/dashboard' component={Dashboard}/>

	</Switch>
	</Router>
);
}

export default App;
