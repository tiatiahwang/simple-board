const { user } = require('../../models');

module.exports = async (req, res) => {
  // 넘어오는 정보가 없는 경우
  if (!req.body) {
    return res.status(400).send('필수 항목이 입력되지 않았습니다');
  }

  const { email, password } = req.body;

  try {
    const userFound = await user.findOne({
      where: { email },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });

    // 가입되어 있지 않는 이메일 인경우
    if (!userFound) {
      return res
        .status(404)
        .json({ message: '가입 되어 있지 않은 이메일 입니다' });
    }

    console.log(userFound);

    res.status(200).send('로그인 성공');
  } catch (e) {
    console.log(e);
  }
};
