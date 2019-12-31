module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable("realTime", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    item: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    charset: "utf8"
  })
}

module.exports.down = queryInterface => {
  return queryInterface.dropTable("realTime")
}