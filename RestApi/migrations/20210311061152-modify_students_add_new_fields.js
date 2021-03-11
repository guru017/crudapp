'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Students', // table name
        'email', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Students', 'email'),
    ]);
  },
};
