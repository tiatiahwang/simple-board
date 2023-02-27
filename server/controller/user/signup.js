const CryptoJS = require('crypto-js');
const sequelize = require('sequelize');
const { user } = require('../../models');

const Op = sequelize.Op;

module.exports = async (req, res) => {
  // 넘어오는 정보가 없는 경우
  if (!req.body) {
    return res.status(400).send('필수 항목이 입력되지 않았습니다');
  }

  try {
    const { email, nickname, password } = req.body;

    const existed = await user.findOne({
      where: { [Op.or]: [{ email }, { nickname }] },
    });

    if (existed) {
      const { email: existedEmail, nickname: existedNickname } =
        existed.dataValues;
      console.log(existedEmail, existedNickname);
      if (existedEmail === email && existedNickname === nickname) {
        return res
          .status(409)
          .json({ message: '이미 가입되어 있는 이메일과 닉네임 입니다' });
      } else if (existedEmail === email && existedNickname !== nickname) {
        return res
          .status(409)
          .json({ message: '이미 가입되어 있는 이메일 입니다' });
      } else {
        return res
          .status(409)
          .json({ message: '이미 가입되어 있는 닉네임 입니다' });
      }
    }

    const userInfo = await user.create({
      email,
      nickname,
      password,
    });

    if (!userInfo) {
      return res.status(400).json({ message: '오류가 발생하였습니다' });
    }

    res.status(200).json({ message: '회원가입 성공!' });
  } catch (e) {
    console.log(e);
  }
};
