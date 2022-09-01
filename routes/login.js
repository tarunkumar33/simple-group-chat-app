const express=require('express');

const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send(`<form action="/login" onSubmit="localStorage.setItem('username',document.getElementById('username').value)" method="post">
    <input type="text" placeholder="username" id="username" name="username">
    <button type="submit">login</button>
    </form>`);
});

router.post('/login',(req,res,next)=>{
    res.redirect('/');
});


module.exports=router;