const {z} = require("zod");

const createTodoType = z.object({
    title:z.string(),
    description:z.string(),

});

const updateTodoType =z.string();

module.exports={
    createTodoType,
    updateTodoType,
}

