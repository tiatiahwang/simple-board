'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        nickname: 'tia',
        email: 'tia@tia.com',
        password: '123123123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nickname: 'tiatia',
        email: 'tia@a.c',
        password: '123123123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
