const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send("Servidor Rodando na porta "+process.env.PORT);
})
module.exports = router