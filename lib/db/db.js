const SequelizeDB = require("sequelize");
const { Op } = SequelizeDB;
const { psql } = require("../config");

module.exports = operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
   $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col,
};

const connection = new SequelizeDB(psql.database, psql.user, psql.password, {
  host: psql.loalhost,
  dialect: psql.dialect,
  logging: false,
  define: {
    freezeTableName: true
  },
  operatorsAliases: operatorsAliases,
  validate:true,
});
connection
  .authenticate()
  .then(() => {
    console.log("connected to Database");
  })
  .catch((err) => console.error("connection error", err.stack));

connection.sync({
  // logging:false,
  // force:true
});

module.exports = connection;