// We use in memory data base 
let users =[
    {id:1,name:"Amit Sharma",mob:"98345xxxxx",email:"amit.example@exam.com"},
    {id:2,name:"Monika Verma",mob:"92345xxxxx",email:"moni.example@exam.com"},
]

let nextId=3;

export const getUsers = () =>{
    return users;

};

export const addUser=(user)=>{
    user.id=nextId++;
    users.push(user);
    return user;
};
 
export const getUserById=(pId)=>{
    const userFound=users.find((user)=>user.id===pId);
    return userFound;
};

export const updateUser=(pid,Userdata)=>{
    const userIndex=users.findIndex((user)=>user.id===pid);
    if(userIndex==-1){
        return false;
    }
    Userdata.id=pid;
    users[userIndex]=Userdata;
    return Userdata;

};

export const deleteUser=(pid)=>{
    const Index=users.findIndex((user)=>user.id===pid);
     if(userIndex==-1){
        return false;
    }
    users.splice(Index,1);
}
