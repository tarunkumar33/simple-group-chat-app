const express=require('express');

const router=express.Router();

router.use('/login',(req,res,next)=>{
    res.send(`<form action="/" onSubmit="localStorage.setItem('username',document.getElementById('username').value)" method="post">
    <input type="text" placeholder="username" id="username" name="username">
    <button type="submit">login</button>
    </form>`);
});


module.exports=router;