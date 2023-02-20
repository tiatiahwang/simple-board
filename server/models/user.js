const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      nickname: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true, // 소셜 로그인은 비번 필요가 없음
      },
    },
    {
      timestamps: true,
      paranoid: true, // 삭제일 (복구용)
    },
  );
};
