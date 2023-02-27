const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const { user } = require('../../models');

module.exports = async (req, res) => {
  // 넘어오는 정보가 없는 경우
  if (!req.body) {
    return res.status(400).send('필수 항목이 입력되지 않았습니다');
  }

  try {
    const { email, password } = req.body;

    const existed = await user.findOne({
      where: { email },
      attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] },
    });

    // 가입되어 있지 않는 이메일 인경우
    if (!existed) {
      return res
        .status(404)
        .json({ message: '가입 되어 있지 않은 이메일 입니다' });
    }

    // 입력한 비밀번호 복호화
    const typedDecrtyped = CryptoJS.AES.decrypt(
      password,
      process.env.SECRET_KEY,
    ).toString(CryptoJS.enc.Utf8);

    // 저장된 비밀번호 복호화
    const { password: savedPassword } = existed.dataValues;

    const savedDecrtyped = CryptoJS.AES.decrypt(
      savedPassword,
      process.env.SECRET_KEY,
    ).toString(CryptoJS.enc.Utf8);

    // 비밀번호가 틀린 경우
    if (typedDecrtyped !== savedDecrtyped) {
      return res.status(404).json({ message: '비밀번호를 다시 확인해 주세요' });
    }

    const userInfo = existed.dataValues;
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({ accessToken, message: '로그인 성공' });
  } catch (e) {
    console.log(e);
  }
};
