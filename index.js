const   express     = require('express');
const   bodyParser  = require('body-parser');
const   path        = require('path');
const   app         = express();
const   {router}    = require('./routes/todos.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));




app.use('/api/todos', router)
app.get('/', (req,res)=>{
    res.sendFile('index.html')
});




const port = process.env.PORT || 3000;
app.listen(port,() =>{
    console.log(`server has running on port ${port}`);
});