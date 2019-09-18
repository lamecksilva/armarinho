import * as React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/ListAlt';

export default [
	{
		name: 'Dashboard',
		url: '/dashboard',
		icon: <HomeIcon />
	},
	{
		name: 'Usuários',
		url: '/users',
		icon: <PeopleIcon />
	},
	{
		name: 'Produtos',
		url: '/products',
		icon: <ListIcon />
	}
];
