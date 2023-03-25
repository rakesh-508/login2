const express = require("express")
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use
app.set("view engine","ejs");
const data_array = [
    {
        fname :"rakesh",
        lname :"ande",
        email :"rakeshande99@gmail.com",
        phonenumber :"8688989462"
    }
]
app.get("/",function(req,res)
{
    res.render("main")
})
app.get("/signin",function(req,res)
{
    res.render("signin")
})
app.get("/signup",function(req,res)
{
    res.render("signup")
})
app.post("/signup",function(req,res)
{
    data_array.push(
        {
           fname :req.body.fname,
           lname :req.body.lname,
           email :req.body.email,
           phonenumber :req.body.phonenumber
        }
    )
    res.redirect("data")
})
app.post("/signin",function(req,res)
{
    data_array.push(
        {
          fname :  (req.body.fname),
           lname : (req.body.lname),
           email : (req.body.email),
           phonenumber : (req.body.phonenumber)
        }
    )
    res.redirect("/data")
})
app.get("/data",function(req,res)
{
    res.render("data",{data1:data_array})
    console.log(data_array);
})
app.post("/signup",function(req,res)
{
    res.render("data")
})
app.listen(3000,function(err)
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("this port is running on port 3000");
    }
})