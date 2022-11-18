const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @acess Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET Goals" });
});

// @desc Set goal
// @route POST /api/goals
// @acess Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Pleas add a text field");
  }
  res.status(200).json({ message: "SET Goal" });
});

// @desc Update goal
// @route PUT /api/goals/:id
// @acess Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `UPDATE Goal ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @acess Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
