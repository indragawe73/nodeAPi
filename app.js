const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const ordertRoutes = require('./api/routes/orders');

// app.use((req, res, next) => {
// 	res.status(200).json({
// 		message: 'IT WOrks'
// 	});
// });


app.use('/products', productRoutes);
app.use('/orders', ordertRoutes);

module.exports = app;