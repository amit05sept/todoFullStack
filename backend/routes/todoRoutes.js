const todoController = require("../controllers/todoController");
const {Router} = require("express");
const {createTodoValidations , idValidation }= require("../middlewares/todoValidations");

const router = Router();

router.get("/getTodo/:id",idValidation,todoController.getTodoById);
router.get("/getAllTodos",todoController.getAllTodos);
router.post("/create",createTodoValidations,todoController.createNewTodo);
router.post("/markComplete/:id",idValidation,todoController.markTodoComplete);
router.post("/unmarkComplete/:id",idValidation,todoController.unmarkTodoComplete);
router.get("/edit/:id",todoController.editTodo);
router.get("/delete/:id",todoController.deleteTodo);
router.get("deleteAll",todoController.deleteAll);

module.exports = router;
