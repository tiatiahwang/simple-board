module.exports = (req, res) => {
  const IMG_URL = `http://localhost:4000/uploads/${req.file.filename}`;
  res.status(200).json({ url: IMG_URL });
};
