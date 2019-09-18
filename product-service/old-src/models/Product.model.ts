import { DataTypes } from 'sequelize';

import { sequelize } from '../loaders/sequelize.loader';

export default sequelize.define(
	'product',
	{
		id: {
			type: DataTypes.NUMBER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: { type: DataTypes.STRING, allowNull: false },
		category: {
			type: DataTypes.ENUM,
			values: ['Camisa', 'Calça', 'Bermuda', 'Saia', 'Vestido'],
			allowNull: false
		},
		size: {
			type: DataTypes.ENUM,
			values: ['P', 'M', 'G', 'XG'],
			allowNull: true
		}
	},
	{
		timestamps: true
	}
);

/*    Products
  id,
  name,
  category,
  size,
  createdAt,
  updatedAt
*/

/*    Images
  id,
  productId,
  url,
*/
