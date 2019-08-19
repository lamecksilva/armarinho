import * as React from 'react';

import { Hello } from './components/Hello';

class App extends React.Component<{}> {
	render(): JSX.Element {
		return (
			<div>
				<Hello projectName="Armarinho" />
			</div>
		);
	}
}

export default App;
