const path = require('path');
const fruits = require('./../model/index');

exports.get = (req, res, next) => {
  const { singleFruit } = req.params;

  if (fruits.includes(singleFruit)) {
    return res.sendFile(
      path.join(
        __dirname,
        '..',
        '..',
        'public',
        'fruits',
        `${req.params.singleFruit}.html`
      )
    );
  }

  next();
};
