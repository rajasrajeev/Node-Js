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
    },
    market_cap: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Market Cap is required.',
        }
      },
    },
    stock_pe: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Stock P/E is required.',
        }
      },
    },
    debt: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Debt is required.',
        }
      },
    },
    divident_yield: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Divident Yield is required.',
        }
      },
    },
    roce: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'ROCE is required.',
        }
      },
    },
    roe: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'ROE is required.',
        }
      },
    },
    debt_equity: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Debt Equity is required.',
        }
      },
    },
    eps: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'EPS is required.',
        }
      },
    },
    reserves: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Reserves is required',
        }
      },
    },
  }, { underscored: true, freezeTableName: true, });

  return stock_list;
};
