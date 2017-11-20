const   express     = require('express');
const   bodyParser  = require('body-parser');
const   app         = express();
const   {router}    = require('./routes/todos.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




app.use('/api/todos', router)
app.get('/', (req,res)=>{
    res.send('<h1>Hi there from root Route</h1>');
});




const port = process.env.PORT || 3000;
app.listen(port,() =>{
    console.log(`server has running on port ${port}`);
});