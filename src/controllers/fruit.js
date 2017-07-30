const fruits = require('./../model/index');

exports.get = (req, res, next) => {
  const { fruit } = req.params;

  if (fruits.includes(fruit)) {
    return res.render('fruit', { fruit });
  }

  next();
};
