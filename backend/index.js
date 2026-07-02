const express=require('express');
const app=express();
const port=3000;
let note=[];
app.post('/notifications,')

app.post('/notifications',(req,res)=>{
    res.send('notify');
    const n=req.body;
    note.push(n);
    res.json({"message":"Notification added successfully"});
});

app.delete('/notifications/:id',(req,res)=>{
    const id=req.params.id;
    note=note.filter(n=>n.id!==id);
    res.json({"message":"Notification deleted successfully"});

});
app.get('/notifications',(req,res)=>{
    res.send('Hello World!');
}); 

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});  
