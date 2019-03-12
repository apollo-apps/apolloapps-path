"use strict";

module.exports = (event, context) => {
  let err;

  let producer = require("./producer")(); // OR: require('./producer')('AWS_SES');

  console.log(event, context);
  let result = producer.send(event.body);

  context.status(200).succeed(result);
};
