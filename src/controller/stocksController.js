const models = require("../models");
const Sequelize = require("sequelize");
const helpers = require("../helpers");
const Op = Sequelize.Op;
const db = require("../models");

module.exports = {
  searchStocks: (req, res) => {
    models.stock_list
      .findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${req.params.key}%`,
              },
            },
          ],
        },
        attributes: ["id", "name"],
      })
      .then((result) => {
        return res
          .status(200)
          .json({ success: true, payload: result, message: "Stocks List" });
      })
      .catch((error) => {
        console.log("stock search error ==> ", error);
        return res
          .status(500)
          .json({ success: false, payload: [], message: error });
      });
  },
  stockDetails: ((req, res) => {
      models.stock_list.findOne({
          where: {
              id: req.params.id
          }
      }).then((result) => {
        return res
          .status(200)
          .json({ success: true, payload: result, message: "Stocks Details" });
      })
      .catch((error) => {
        console.log("stock details error ==> ", error);
        return res
          .status(500)
          .json({ success: false, payload: [], message: error });
      });
  })
};
