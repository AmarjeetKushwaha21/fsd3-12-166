import express from "express";



const app=express();

app.get("/",(req,res)=>{
    // res.send("Hello Express");
    // res.send("<h1>Hello Express  </h1>");


    res.send(`
        <h1> Hello Server </h1>
        <h2> I am amarjeet kushwaha</h2>
        <h3> b.tech 2nd year student</h3>
        `);
});
app.get("/about",(req,res)=>{
    res.send("<h2> about page </h2>");
});


app.get("/products",(req,res)=>{
    const product={
        id :1,
        name:"mobile",
        price:10000,
    };
    res.send(product);
});


app.listen(4444,()=> console.log("prg1 is runnit at 4444"));
