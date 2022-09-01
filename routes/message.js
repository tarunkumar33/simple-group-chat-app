const express=require('express');
const fs=require('fs');
const data=require('./data');

const router=express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        console.log('hi',data.toString());
        res.send(`<p>${data.toString()?data.toString():"No Chats exists"}</p><form action="/" onSubmit="document.getElementById('username').value=localStorage.getItem('username')" method="post">
    <input type="text" placeholder="message" id="message" name="message">
    <input type="hidden" placeholder="username" id="username" name="username">
    <button type="submit">Send</button>
    </form>`);
    })
    
});

router.post('/',(req,res,next)=>{
    if(Object.keys(req.body).length===2){
    data.push(`{${req.body.username}:${req.body.message}}`);
    console.log(data);
    fs.appendFile('message.txt',`${req.body.username} : ${req.body.message} `,err=>console.log(err));
    }
    res.redirect('/');
});

module.exports=router;