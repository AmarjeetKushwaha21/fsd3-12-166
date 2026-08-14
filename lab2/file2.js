import { unlink } from "fs";
import {readFile,writeFile,appendFile} from "fs/promises";

 const readData= async (filename)=>{
    try{
    const content = await readFile(filename,"utf-8");
    return content;
    }catch(e){
        console.log(e.message);
        console.log("file not found");
    }
    finally{
        console.log("read data finished");

    }
    throw{
        code:404,
        message:"file not found"
    }
};

const writeData= async (filename,content)=>{
     try {
        await writeFile(filename,content);
     } catch (error) {
        console.log(error.message);
        
     }
};
const deleteFile = async(filename)=>{
    try {
        await unlink(filename);
        
    } catch (error) {
        console.log("file not found -2 delet");
        
    }
};

const appendData= async (filename,content)=>{
    await appendFile(filename,content);

};
const ansdata=await readData("file5.js");
console.log(ansdata);

// if a funtion uses a awit funtion then the funtion must be async
