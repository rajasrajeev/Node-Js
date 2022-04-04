'use strict';

const Sequelize = require('sequelize');
const Op = Sequelize.Op


module.exports = (sequelize, DataTypes) => {
  const stock_list = sequelize.define('stock_list', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required.',
        }
      },
    },
    current_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Current Price is required.',
        }
      },
      get: function() {
        return "₹ "+Math.round(this.getDataValue('current_price'));
      }
    },
    market_cap: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Market Cap is required.',
        }
      },
      get: function() {
        return "₹ "+Math.round(this.getDataValue('market_cap'));
      }
    },
    
    stock_pe: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Stock P/E is required.',
        }
      },
      get: function() {
        return this.getDataValue('stock_pe') + " %";
      }
    },
    debt: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Debt is required.',
        }
      },
      get: function() {
        return "₹ "+Math.round(this.getDataValue('debt'));
      }
    },
    divident_yield: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Divident Yield is required.',
        }
      },
      get: function() {
        return "₹ "+Math.round(this.getDataValue('divident_yield'));
      }
    },
    roce: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'ROCE is required.',
        }
      },
      get: function() {
        return this.getDataValue('roce') + " %";
      }
      
    },
    roe: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'ROE is required.',
        }
      },
      get: function() {
        return this.getDataValue('roe') + " %";
      }
    },
    debt_equity: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Debt Equity is required.',
        }
      },
      get: function() {
        return this.getDataValue('debt_equity') + " %";
      }
    },
    eps: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'EPS is required.',
        }
      },
      get: function() {
        return "₹ "+Math.round(this.getDataValue('eps'));
      }
    },
    reserves: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Reserves is required',
        }
      },
      get: function() {
        return "₹ "+Math.round(this.getDataValue('reserves'));
      }
    },
  }, { underscored: true, freezeTableName: true, });

  return stock_list;
};
