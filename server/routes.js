const express = require("express");
const Todo = require("./todoSchema");

const router = express.Router();

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/todos", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).send(err);
  }
});

//update

router.put("/todos/:id", async (req, res) => {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateTodo) {
      return res.status(404).send("Todo not found");
    }
    res.json(updateTodo);
  } catch (err) {
    res.status(400).send(err);
  }
});

// // Update a todo
// router.put("/todos/:id", async (req, res) => {
//   try {
//     const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updateTodo) {
//       return res.status(404).send("Todo not found");
//     }
//     res.json(updateTodo);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

delete router.delete("/todos/:id", async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deleteTodo) {
      res.send(404).send("Todo not found");
    }
    res.json(deleteTodo);
  } catch (err) {
    res.status(500).send(err);
  }
});

// router.delete("/todos/:id", async (req, res) => {
//   try {
//     const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
//     if (!deleteTodo) {
//       res.status(404).send("Todo not found");
//     }
//     res.json(deleteTodo);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

module.exports = router;
