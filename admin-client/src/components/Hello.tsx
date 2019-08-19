import * as React from 'react';

export interface HelloProps {
	projectName?: string;
}

// export interface HelloState {}

//'HelloProps' describes the shape of props.
//'HelloState' describes the shape of props.
export class Hello extends React.Component<HelloProps> {
	render(): JSX.Element {
		return (
			<div>
				<h1>Hello from {this.props.projectName}</h1>
				<h3>Successfully setup our React, Webpack, and Typescript project!</h3>
			</div>
		);
	}
}
