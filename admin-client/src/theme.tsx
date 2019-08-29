import { createMuiTheme, Theme } from '@material-ui/core/styles';

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			main: '#a97bf5',
			light: '#ddabff',
			dark: '#764dc2'
		},
		secondary: {
			main: '#888bed',
			light: '#bbbbff',
			dark: '#555eba'
		}
	}
});

export default theme;
