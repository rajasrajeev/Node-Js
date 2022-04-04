const models = require("../models");
const Sequelize = require("sequelize");
const helpers = require("../helpers");
const Op = Sequelize.Op;
const db = require("../models");
var moment = require("moment");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body; // Get login data
    try {
      const users = await models.users.authenticate(email, password);
      if (!users) {
        // User credentials invalid
        throw new Error("Invalid email/password combination");
      }
      models.users
        .findAll({
          where: {
            id: users.id,
          },
        })
        .then((patientResult) => {
          console.log(patientResult[0]);
          const token = helpers.jwt.generate(users.id);
          return res.json({
            success: true,
            payload: {
              token: token,
              user_id: users.id,
              email: users.email,
            },
            message: "",
          });
        })
        .catch((patientError) => {
          return res
            .status(500)
            .json({
              success: false,
              payload: {},
              message: patientError.message,
            });
        });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, payload: {}, message: error.message });
    }
  },
  signup: async (req, res) => {
    const { email, password } = req.body;
    const user = models.users.build(req.body);
    try {
      /* helpers.users.validate(req.body); */
      user
        .save({
          fields: [
            "email",
            "password",
          ],
        })
        .then(async (userResult) => {
          
          const users = await models.users.authenticate(email, password);
          if (!users) {
            // User credentials invalid
            throw new Error("Invalid email/password combination");
          }
          const token = helpers.jwt.generate(users.id);
          return res.json({
            success: true,
            payload: {
              token: token,
              user_id: users.id,
              user_email: users.email,
            },
            message: "",
          });
        })
        .catch((error) => {
          console.log("p", error);
          return res
            .status(500)
            .json({ success: false, payload: {}, message: error });
        });
    } catch (error) {
      console.log("p", error);
      return res
        .status(500)
        .json({ success: false, payload: {}, message: error });
    }
  },
};
