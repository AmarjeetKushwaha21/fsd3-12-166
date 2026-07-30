import {EventEmitter} from "events";
const button = new EventEmitter();
button.on("click",(uname)=>{
    console.log(`button clicked by ${uname}`);
});
button.emit("click","ram");
button.emit("click","shyam");
button.emit("click","amar");
button.emit("click");

