import http from "http";
import {addUser,getUserById,updateUser,addUser,deleteUser,getAllUsers} from "./users.js";
const server=http.createServer((req,res)=>{
    if((req.url==="/api/users"&& req.method==="GET")){
        res.end(JSON.stringify(getAllUsers()));
    }

    else if((req.url==="/api/users"&& req.method==="POST")){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        });
        req.on('end',()=>{
            const user =JSON.parse(body);
            const userCreated=addUser(user);
            res.end(JSON.stringify({msg: "user added", userCreated}));
        });

        res.end(JSON.stringify({msg:"add user"}));
    }

    else if((req.url==="/api/users/1"&& req.method==="GET")){
        const userId=NUMBER(req.url.split('/').pop())
        const userfount=getUserById(userId);
        if(!userfount){
            res.end(JSON.stringify({msg: 'user not found'}));
        }
        else{
            res.end(JSON.stringify(userfound);
        }

        

        res.end(JSON.stringify({msg:`single user with id ${userId}`}));


    }

    else if((req.url==="/api/users/1"&& req.method==="PUT")){
        res.end(JSON.stringify({msg:"Update user 1"}));
    }

    else if((req.url==="/api/users/1"&& req.method==="DELETE")){
        res.end(JSON.stringify({msg:"remove 1"}));
    }

    else{
        res.statusCode=404;
        res.end();
    }
});

server.listen(3000,()=>console.log("prg7 is running on 3000"));