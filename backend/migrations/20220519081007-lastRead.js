"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("ChatAssociations", "lastRead", {
      type: Sequelize.BIGINT,
      allowNull: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
