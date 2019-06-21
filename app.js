let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
let imageSearchRoutes=require('./routes/imagesearch')
let latestRoutes=require('./routes/latest');
let path=require('path');
let cors=require('cors')

app.use(cors())
imageSearchRoutes(app);
latestRoutes(app);

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,"public")));

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true},(err,db)=>{
    if (err){throw err}
    console.log("Connected to DB...")
})

//404 not found middleware
app.use((req,res,next)=>{
    res.status(404)
    .type("text")
    .send("NOT FOUND")
})

app.listen(process.env.PORT||5000,function(){
    var port=process.env.PORT;
    console.log("Listening on port "+this.address().port);
})
