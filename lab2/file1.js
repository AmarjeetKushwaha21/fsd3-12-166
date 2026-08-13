import {writeFile,appendFile,readFile} from "fs/promises";

// await writeFile("hello.txt", "js is eassy");
let name="Amarjeet kushwaha";
// await appendFile("hello.txt" , `\n fs is eassy just like js`);
// await appendFile("hello.txt" , `\n my name is ${name}`);
// await writeFile("hello.txt" , `\n my name is ${name}`); 
await appendFile("hello.txt" , "\n fs is eassy just like js 😎 ");
const content = await readFile("hello.txt","utf-8");
console.log(content);