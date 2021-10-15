const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res)=>{
	let htmlPath = path.join(__dirname, './views/index.html');
    res.sendFile(htmlPath);
});

app.get('/register',(req,res)=>{
	let htmlPath = path.join(__dirname, './views/register.html');
    res.sendFile(htmlPath);
});
app.get('/login',(req,res)=>{
	let htmlPath = path.join(__dirname, './views/login.html');
    res.sendFile(htmlPath);
});



app.listen(port, () => console.log('listen in port 3000'))