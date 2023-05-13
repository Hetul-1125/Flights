'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addConstraint('Airports', {
    type: 'FOREIGN KEY',
    name: 'city_fkey_constraint',
    fields: ['cityId'],
    references: {
      table: 'Cities',
      field: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city_fkey_constraint');
  }
};

/**
 * To check forigen key in  your table following query is used 
 * SELECT * FROM   INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE   TABLE_NAME = 'AIRPORTS' AND   CONSTRAINT_SCHEMA = 'FLIGHTS';
 */