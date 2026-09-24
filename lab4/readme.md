# NPM Projects

1. go to project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```
script{
    "start":"node app.js",
    "dev": "nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use `npm run dev`
9. module mai function ke through run hoga aur commonjs mai oops ke through

## REST API(Representational State Transfer Application Programming Interface)
- majority backend server return only data not html file
- REST API uses (get,post,put,patch,delete) method to communicate with client
- any browser can check only get method
- for other method type we use third party API Tester like postman, thunder client, echo api etc
## request type
###  getAll ,getById 
- (get: /api/product/)-it will access all product
 - (get: /api/product/101)- it will acces only that product

### post :
- if want to add new product in data base
- data will be share by echoapi body section 
### patch/put : 
- if we want to add discount in product or eddit something
- get: /api/product/101 - kisne replace karna that is writen inside body
### delete :
- it we want to delete one product from data base 
- get: /api/product/101 here we want delete that id no. product from database
### export funtion 
- this funtion canbe used by other funtion 