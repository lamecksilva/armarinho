import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../loaders/sequelize.loader';

class ImageModel extends Model {

}

// export const ImageModel = sequelize.define(
// 	'image',
// 	{
// 		id: {
// 			type: DataTypes.NUMBER,
// 			allowNull: false,
// 			autoIncrement: true,
// 			primaryKey: true
// 		},
// 		productId: {
// 			type: DataTypes.INTEGER,
// 			references: {
// 				model: 'product',
// 				key: 'id'
// 			},
// 			allowNull: false
// 		}
// 	},
// 	{
// 		timestamps: true
// 	}
// );
