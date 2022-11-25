const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

// Rotas simples, pois usam o mesmo caminho para GET e Post
router.route("/").get(protect, getGoals).post(protect, setGoal);

// Essas 2 rotas foram atualizadas para ficar em apenas uma linha
// router.get("/", getGoals);
// router.post("/", setGoal);

// Rotas simples, pois usam o mesmo caminho "/:id" para Updte e Delete
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

// Essas 2 rotas foram atualizadas para ficar em apenas uma linha
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;
