const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const footballers ={
    "savage" : {
        'age':29,
        'bithname':'Cybog',
        "birthlocation":'London, England',
        'status':'married'
    },
    "paul":{
        'age':28,
        'birthname':'Pogba',
        'birthlocation':'Paris, France',
        'status':'free agent'
    },
    "bruno":{
        'age':27,
        'birthname':'Fernandes',
        'birthlocation':'porto, Portugal',
        'status':'ManUtd'
    },
    "unknown":{
        'age':0,
        'birthname':'unknown',
        'birthlocation':'unknown',
        'status':'unknown'
    }

}

app.get('/',function(req,res){
    res.sendFile(__dirname+'/apiindex.html')
})

app.get('/api/:name',(req,res)=>{
    const Footballer_name = req.params.name.toLowerCase();
    if(footballers[Footballer_name]){
        res.json(footballers[Footballer_name])
    }else{
        res.json(footballers['unknown'])
    }
})



app.listen(PORT,function(){
    console.log('the server is running on port 8000')
})
