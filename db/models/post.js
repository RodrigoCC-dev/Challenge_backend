'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Este valor no puede ser nulo.'
        },
        notEmpty: {
          msg: 'Este valor no puede estar vacío.'
        }
      }
    },
    description: {
      type: DataTypes.STRING(1234),
      validate: {
        notNull: {
          msg: 'Este valor no puede ser nulo.'
        },
        notEmpty: {
          msg: 'El post debe tener una descripción.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
    scopes: {
      dataOnly: {
        attibutes: { exclude: ['createdAt', 'updatedAt']}
      }
    }
  });
  return Post;
};
