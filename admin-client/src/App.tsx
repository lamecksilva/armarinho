import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Hello from './components/Hello';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Home from './components/home';

class App extends React.Component<{}> {
	render(): JSX.Element {
		return (
			<Router>
				<React.Fragment>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/hello" component={Hello} />
					<Route path="/dashboard" component={Dashboard} />
				</React.Fragment>
			</Router>
		);
	}
}

export default hot(App);
