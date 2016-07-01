/* eslint-disable new-cap, no-param-reassign, consistent-return */
import joi from 'joi';

const schema = {
  id: joi.string().required().regex(/^[0-9a-f]{24}$/),
};

module.exports = (req, res, next) => {
  console.log( 'Inside find didnot find query', req.query);
  if (req.query.length > 0) {
    const result = joi.validate(req.query, schema);

    if (result.error) {
      res.status(400).send({ messages: result.error.details.map(d => d.message) });
    } else {
      next();
    }
  } else {
    console.log('Inside not query before next');
    next();
  }
};
