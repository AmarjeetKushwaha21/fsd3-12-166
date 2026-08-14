## File System
- FS module directly comunicate with OS wither then system the common opretion on a file or folder are 
1. File -> writeFile ,readFile, append
2. Folder -> Mkdir/Md, rmdir/rm, readdir
3. File meta data -> stat,lStat ,rStat
4. Watch -> watch ,unwatch
4. Stream ->readStream(), writeStream()
all funtions are promiss so it must be called with await key word 
## CRUD
- C-creat
- R-retrive (read karna )
- U-update
- D-delet

- assume we are making cart related project
1. user can add any product (id,name,price ,qty) into cart
2. user canm see all the items of cart 
3. user  can remove item from cart 
4. user can also update quantity of product
5. all the items should be stored after termination of project

