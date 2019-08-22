import * as React from 'react';

export interface DashboardState {
	counter: number;
}

export interface DashboardProps {}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
	constructor(props: DashboardState) {
		super(props);

		this.state = {
			counter: 0
		};
	}

	render(): JSX.Element {
		return (
			<h1>
				<h3>Dashboard</h3>
			</h1>
		);
	}
}

export default Dashboard;
