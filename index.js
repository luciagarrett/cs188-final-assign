const express = require('express');
const app = express;
const {initCartControllers} = require('./public/javascripts/controllers/cart-controller');
const {initCustomerControllers} = require('./public/javascripts/controllers/customer-controller');
const {initItemControllers} = require('./public/javascripts/controllers/item-controller');
const {initCartItemControllers} = require('./public/javascripts/controllers/cartItem-controller');
const port = 5555;

initCartControllers(app);
initCustomerControllers(app);
initItemControllers(app);
initCartItemControllers(app);

app.listen(port, function () {
  console.log('Example app listening on port 5555');
});