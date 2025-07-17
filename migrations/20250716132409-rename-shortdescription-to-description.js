'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Scholarships', 'shortDescription', 'description');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Scholarships', 'description', 'shortDescription');
  }
};
