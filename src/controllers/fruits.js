const fruits = require('./../model/index');

exports.get = (req, res) => {
  res.render('fruits', { activePage: { fruits: true }, fruits });
};
