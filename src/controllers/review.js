const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");

const getAllReviews = async (req, res) => {
  const getAllReviews = await prisma.review.findMany({
    include: {
      customer: true,
      movie: true,
    },
  });
  res.json({ reviews: getAllReviews });
};

const createReview = async (req, res) => {
  const { movieId, review, customerId } = req.body;
  const createReview = await prisma.review.create({
    data: {
      movieId,
      review,
      customerId,
    },
    include: {
      customer: true,
      movie: true,
    },
  });
  res.status(201).json({ review: createReview });
};

module.exports = {
  getAllReviews,
  createReview,
};