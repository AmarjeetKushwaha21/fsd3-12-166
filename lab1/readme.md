# eventLoop
js is synchronous and single threaded bydefault

## There can be async behaviour
- with BrowserAPI -setTimeout , setInternak,setimmediate ,nexttick
- with promises
- with event handlers
## promiss
 - a funtion not executed imidiately but it must be executed after a while it has some status during the execution
  at final it may resolve ()-> success or reject()->unsuccess
  ## call back funtion
  - that passas aegument or the parameter funtion 
  ## moder js is devided into two categre 
   1. is common js(.cjs)-> support oops ->require key word will be there 
  - priority (nextTick,promise,setImmediate/seTimeout)
   2. is module js(.mjs)->fullow moduler approach -> import 
  - priority(promis , nextTick,setImmediate/settimeout)