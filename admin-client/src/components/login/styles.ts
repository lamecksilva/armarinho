import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
	createStyles({
		rootContainer: {
			minHeight: '400px',
			maxWidth: '500px',
			paddingLeft: 0,
			paddingRight: 0,
			marginTop: '10%',

			boxShadow: '0px 0px 23px 0px gray',

			borderTopLeftRadius: '20px',
			borderTopRightRadius: '20px',
			borderBottomLeftRadius: '20px',
			borderBottomRightRadius: '20px',

			[theme.breakpoints.down('md')]: {
				// boxShadow: '0px 0px 23px 0px blue',
				width: '450px',
				marginTop: '15%'
			},
			[theme.breakpoints.down('xs')]: {
				// boxShadow: '0px 0px 23px 0px red',
				width: '350px',
				marginTop: '30%'
			}
		},
		loginHeader: {
			width: '100%',
			height: '90px',
			marginBottom: '20px',
			borderTopRightRadius: '20px',
			borderTopLeftRadius: '20px',
			textAlign: 'center',
			backgroundColor: theme.palette.primary.dark
		},
		loginHeaderTitle: {
			paddingTop: '5%',
			fontSize: '1.8rem',
			fontFamily: "'Varela Round', sans-serif",
			color: '#e0f7fa',

			[theme.breakpoints.down('sm')]: {
				fontSize: '1.5rem'
			}
		},
		textFieldStyle: {
			width: '80%',
			marginTop: '20px',
			marginRight: '10%',
			marginLeft: '10%',

			'&:hover': {
				color: theme.palette.primary.light
			},

			'& .MuiOutlinedInput-root': {
				height: '3em',
				'& .MuiOutlinedInput-notchedOutline': {
					borderRadius: '3em'
				}
			}
		},
		buttonStyle: {
			width: '80%',
			marginLeft: 'auto',
			marginRight: 'auto',
			marginTop: '50px',
			height: '2.5em',
			backgroundColor: theme.palette.primary.dark,
			color: '#e0f7fa',
			fontFamily: "'Varela Round', sans-serif",
			fontSize: '1.2rem',
			borderRadius: '1em'
		},
		esqueceuSenhaStyle: {
			fontFamily: "'Varela Round', sans-serif",
			textTransform: 'none',
			margin: '1rem auto 1rem auto',
			color: theme.palette.secondary.dark
		}
	})
);
