let mongoose=require('mongoose');
let Search=require('../modules/search');


module.exports=(app)=>{
    app.get("/api/latest/imagesearch",(rep,res)=>{
      Search.find({},{_id:0})
      .select('-__v')//"-"mean exclude the field
      .limit(10)
      .sort({"when":-1})
      .then((data)=>{     
          res.send(data)
      }).catch((err)=>{
          throw err
      })
    })
}