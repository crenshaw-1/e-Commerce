const Product = require('../models/product.model');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

exports.createProduct = asyncHandler(async (req, res, next) => {
  req.body.sellerId = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: product
  });
});

exports.getProducts = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Product.countDocuments();

  const products = await Product.find()
    .skip(startIndex)
    .limit(limit)
    .sort(req.query.sort ? { price: req.query.sort === 'price_asc' ? 1 : -1 } : { createdAt: -1 });
  
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.status(200).json({
    success: true,
    count: products.length,
    pagination,
    data: products
  });
});

exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));
  }

  if (product.sellerId.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to update this product`, 401));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: product
  });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorResponse(`Product not found with id of ${req.params.id}`, 404));
  }

  if (product.sellerId.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this product`, 401));
  }

  await product.remove();

  res.status(204).json({
    success: true,
    data: {}
  });
});