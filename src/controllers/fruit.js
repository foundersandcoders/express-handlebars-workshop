const path = require('path');
const fruits = require('./../model/index');

exports.get = (req, res, next) => {
  const { fruit } = req.params;

  if (fruits.includes(fruit)) {
    return res.sendFile(
      path.join(
        __dirname,
        '..',
        '..',
        'public',
        'fruits',
        `${req.params.fruit}.html`
      )
    );
  }

  next();
};
