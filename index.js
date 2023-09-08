          const exp=require('express')
          const express=exp();
          const path =require('path')
          const publicPth=path.join(__dirname,'public')

          express.get('',(req,res)=>{
            res.sendFile(`${publicPth}/index.html`)
          })


          express.get('/myHome',(req,res)=>{
            res.sendFile(`${publicPth}/Home.html`)
          })


          // work as 404 page
          express.get('*',(req,res)=>{
            res.sendFile(`${publicPth}/Home.html`)
          })


          express.listen(5050,'localhost',()=>{
            console.log("success")
          })