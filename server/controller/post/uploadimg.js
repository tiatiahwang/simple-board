module.exports = (req, res) => {
  // 해당 라우터가 정상적으로 작동하면 public/uploads에 이미지가 업로드된다.
  // 업로드된 이미지의 URL 경로를 프론트엔드로 반환한다.
  console.log('전달받은 파일', req.file);

  const IMG_URL = `http://localhost:4000/uploads/${req.file.filename}`;
  console.log('IMG_RUL', IMG_URL);
  res.status(200).json({ url: IMG_URL });
};
