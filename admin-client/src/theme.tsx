import { createMuiTheme, Theme } from '@material-ui/core/styles';

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ed3975',
			light: '#ff71a3',
			dark: '#b5004a'
		},
		secondary: {
			main: '#edb4b9',
			light: '#ffe6eb',
			dark: '#ba8489'
		}
	}
});

export default theme;
