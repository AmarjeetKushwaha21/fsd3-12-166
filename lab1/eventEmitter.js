import { EventEmitter } from "node:events";

const login=(name)=>{
    console.log(`${name} logged in `);
};
const start=()=>{
    console.log("system starts");
};
const working=(name)=>{
    console.log(`${name} add item to cart`);
};
const checkout=(name)=>{
    console.log(`${name} logged out`);
};
const syscheck=()=>{
    console.log(`${name} sorry your system is sutdown`);
}
const task = new EventEmitter();
// one execute hoga 
task.once("greeting",start);
// mutiple time execute hoga
task.on("greeting",login);
task.on("greeting",working);
task.on("greeting",checkout);
task.once("exit",() => {
    console.log("system shutdown ");

});

task.emit("greeting","Amarjeet kushwaha");
task.emit("greeting","aman chaurashiya");
task.off("greeting",working);
task.emit("greeting","aman yadav");
task.emit("exit","aman yadav");


// login("amarjeet kushwaha");