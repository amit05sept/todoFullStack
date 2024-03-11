const { createTodoType , updateTodoType} = require("../types");

const createTodoValidations = function(req,res,next){
    const createPayload = req.body;
    console.log(createPayload);
    const parsePayload = createTodoType.safeParse(createPayload);
    if (!parsePayload.success) {
      res.status(411).json({
        msg: "invalid inputs",
      });
      return;
    }
    next();
}
const idValidation = function(req,res,next){
    const id = req.params.id;
    console.log(id);
    const parseId = updateTodoType.safeParse(id);
    if(!parseId.success){
        res.status(411).json({
            msg: "invalid inputs",
          });
          return;
    }
    next();
}
module.exports={
    createTodoValidations,
    idValidation,
}