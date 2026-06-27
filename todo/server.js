const express = require("express");
const app = express();
 app.use(express.json());
//khali array kyon ki todos add kar sake
 let todo = [];

 app.get("/todo",(req,res)=>{
    res.send(todo);
 });

 //naya todo body se add karne ke liye post ka use ke array me push kar ge
   app.post("/todos",(req,res)=>{
    const { task } = req.body;
    todo.push({
        id :todo.length+1,
        task:task
    });
    
    res.send({
        message:"todo added",
    });
   });
   app.delete("/todos/:id", (req, res) => {
    const id = Number(req.params.id);

    todo = todo.filter(item => item.id !== id);

    res.send({
        message: "Todo deleted",
        
    });
});
app.put("/foundtodos/:id", (req, res) => {
    
    const id = Number(req.params.id);

    if (!req.body || !req.body.task) {
        res.send({
            message: "Task is required"
        });
    }

    const { task } = req.body;

    const foundTodo = todo.find(item => item.id === id);

    if (!foundTodo) {
        res.send({
            message: "Todo not found"
        });
    }

    foundTodo.task = task;

    res.send({
        message: "Todo updated",
        todo: foundTodo
    });
});
app.listen("3000",()=>{
    console.log("server is running");
})