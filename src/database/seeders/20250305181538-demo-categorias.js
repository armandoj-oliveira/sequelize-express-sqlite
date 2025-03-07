'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
    // eslint-disable-next-line no-unused-vars
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
          titulo: 'Node.JS',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          titulo: 'Java',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          titulo: 'Python',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          titulo: 'C#',
          createdAt: new Date(),
          updatedAt: new Date()
      }
  ], {});

  },

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
