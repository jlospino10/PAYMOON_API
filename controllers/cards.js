const cards= require('../models/cards.js');

exports.getcards = async(req, res) => {
 try {
 let data;
 data= await cards.find();
 res.json(data);
 }
 
 catch(error){
 console.log(error);
 res.status(500).send('ups.. hubo un error, contacte al administrador');
 
 }
 
 
 
 

},
exports.postcards= async(req,res) =>{

try{
let data;
data=new cards(req.body);
await data.save();
res.send(data)
}

catch(error){
console.log(error);

res.status(500).send('ups.. hubo un error, contacte al administrador');
}

}
