          const exp=require('express')
          const express=exp();
           
        // config the engine
          express.set('view engine','ejs')
          express.get('/p',(req,res)=>{
             const user={
              name:'ankit',
              email:'ankit@gmail.com'
             }
            // if file present in view then does not need the path.
            // res.render(`profile`,{user});

            // if file not present in view then need path
            res.render(`${__dirname}/profile.ejs`,{user});
          })
            

          express.listen(5050,'localhost',()=>{
            console.log("success")
          })