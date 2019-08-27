import { createMuiTheme, Theme } from '@material-ui/core/styles';

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			main: '#f968f7',
			light: '#eb8deb',
			dark: '#c32fc4'
		},
		secondary: {
			main: '#888bed',
			light: '#bbbbff',
			dark: '#555eba'
		}
	}
});

export default theme;
