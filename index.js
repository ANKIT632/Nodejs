          const express=require('express')
          const app=express();
         
           
          // (req, resp, next): These are the parameters of the reqFilter function:

          // req: Short for "request," it represents the incoming HTTP request from a client, typically containing information like request headers, query parameters, and request body.
          // resp: Short for "response," it represents the HTTP response that will be sent back to the client, containing response headers and body.
          // next: This is a callback function that is used to pass control to the next middleware or route handler in the request-response cycle. Calling next() inside this middleware allows the application to move to the next piece of middleware or route handler.
          
         const reqFilter=(req,resp,next)=>{
          if(!req.query.age){
              resp.send("please enter age")
          }

          else if(req.query.age<17){
            resp.send("under age")
          }

          else{console.log();
            next()
          }

         }

          app.get('/',reqFilter,(req,res)=>{
            res.send("this is home")

          })

          app.get('/home',reqFilter,(req,res)=>{
            res.send("this is home")

          })

          app.get('/contact',(req,res)=>{
            res.send("this is home")

          })

          app.listen(5050,'localhost',()=>{
            console.log("success")
          })