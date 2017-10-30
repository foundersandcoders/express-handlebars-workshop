const fruits = require('./../model/index');

exports.get = (req, res, next) => {
  const { singleFruit } = req.params;
  if (fruits.includes(singleFruit)) {
    return res.render('singlefruit', { singleFruit });
  }

  next();
};
