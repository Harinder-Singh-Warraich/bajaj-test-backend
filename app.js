const express=require("express");
const app=express();
const path=require("path");


app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.redirect("/home");
})
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.post("/data",(req,res)=>{
    const data={
        ...req.body
    };
    const d=new Date(data.dob);
    const numbers=[];
    const alphabets=[];
    for(let i=0;i<5;i++){
        if(data.data[i]===""){
            continue;
        }
        if(isNaN(data.data[i])){
            alphabets.push(data.data[i]);
        }else{
            numbers.push(data.data[i]);
        }
    }
    res.render("data.ejs",{data,d,numbers,alphabets});
})

app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("Up at 3000");
})