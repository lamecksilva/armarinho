import * as React from 'react';

export interface HomeState {}

export interface HomeProps {}

class Home extends React.Component<HomeProps, HomeState> {
	constructor(props: HomeState) {
		super(props);
	}

	render(): JSX.Element {
		return (
			<h1>
				<h3>Home</h3>
			</h1>
		);
	}
}

export default Home;
