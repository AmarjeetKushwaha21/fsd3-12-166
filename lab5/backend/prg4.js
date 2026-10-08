import express from "express";
import { products } from "./deta.js";

const app=express();
// return name, price ,image of all product
app.get("/api/products",(req,res)=>{

//     let sortedProducts=products.map(({name,image,price,id})=>({name,image,price,id}));
//     res.status(200).json({count: sortedProducts.length,data:sortedProducts})

// })
let sortedProducts=products.map(({
    discription,reviews,...rest
})=>rest,);

res.status(200).json({count: sortedProducts.length,data:sortedProducts})


 app.use((req,res)=>{
    res.status(404).send("<h1> Page Not Found</h1>");
 });

//  get all details of particular product
app.get("/api/products/:pid",(req,res)=>{
    const {pid}=req.params;
    const item=products.find((p)=> p.id ===Number(pid));
    if(!item){ 
        res.status(200).json({msg:`product with id ${pid} not found`});
    }
    else{
        res.status(200).json({msg:"product found",data : item});
    }
});



app.listen(4444,()=> console.log("prg4 is running at 4444"));