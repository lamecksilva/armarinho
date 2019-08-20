import * as React from 'react';

//'HelloProps' describes the shape of props.
export interface HelloProps {
	projectName?: string;
}

//'HelloState' describes the shape of the state.
export interface HelloState {
	count: number;
}

export class Hello extends React.Component<HelloProps, HelloState> {
	constructor(props: HelloProps) {
		super(props);

		this.state = { count: 0 };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e: React.MouseEvent) => {
		e.preventDefault();

		this.setState({
			count: this.state.count + 1
		});
	};

	render(): JSX.Element {
		return (
			<div>
				<h1>Hello from {this.props.projectName}</h1>
				<h3>Counter : {this.state.count}</h3>
				<button onClick={this.handleChange}>Click Me!</button>
			</div>
		);
	}
}
