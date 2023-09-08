           // curd operation
           const fs=require('fs');
            const path=require('path');
            const dirPath=path.join(__dirname,'curd');

            const newPath=`${dirPath}/operation.txt`

            //write
            fs.writeFileSync(newPath,"hello");

            //read
            fs.readFile(newPath,'utf8',(err,item)=>{
                if(!err){
                    console.log(item)
                }

            })

            // update
            fs.appendFile(newPath,' me update',(err)=>{
            if(!err) console.log('update complete') 
            })

            // rename 
            fs.rename(newPath,`${dirPath}/curd.txt`,()=>{
                if(!err){
                    console.log("change file name")
                }
            })

            //remove file
            fs.unlinkSync(`${dirPath}/curd.txt`)


// get user query 

            const exp=require('express')
            const express=exp();
  
            express.get('',(req,res)=>{
              // get query from url
                const getName=req.query.name;
  
                // use Html in Express
              res.send(`<input type="text" value=${getName} placeholder="user name">  <a href="/AboutUs">AboutUs</a>`)
            });
            
            express.get('/AboutUs',(req,res)=>{
              res.send('this is about us page <a href="/">Home</a>')
            });
  
            express.listen(5050,'localhost',()=>{
              console.log("success")
            })