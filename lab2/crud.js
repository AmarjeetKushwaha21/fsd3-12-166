import readline from "readline/promises";
import {stdin,stdout } from "process";

const main = async()=>{
    let choice;
    const cin = readline.createInterface({input: stdin,output: stdout});
    do{
    console.log("welcome to flipcart 🤖");
    console.log("1..........show cart");
    console.log("2..........add product");
    console.log("3..........remmove product");
    console.log("4..........update quantity");
    console.log("5..........checkout");
    choice = await cin.question("enter your choice:");
    switch(Number(choice)){
        case 1: 
             console.log("show product");
             break;
        case 2: 
             console.log("product add");
             break;
        case 3: 
             console.log("product remove");
             break;
        case 4: 
             console.log("update product quantity");
             break;
        case 5: 
             console.log("see you later");
            break;
        default:
            console.log("invailid choice! try again🚀");
    }
    }while(choice!=5);
    cin.close();
};
main();