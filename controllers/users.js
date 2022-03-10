const users= require('../models/users.js');

exports.getusers = async(req, res) => {
 try {
 let data;
 data= await users.find();
 res.json(data);
 }
 
 catch(error){
 console.log(error);
 res.status(500).send('ups.. hubo un error, contacte al administrador');
 
 }
 
 
 
 

},
exports.postusers= async(req,res) =>{

try{
let data;
data=new users(req.body);
await data.save();
res.send(data)
}

catch(error){
console.log(error);

res.status(500).send('ups.. hubo un error, contacte al administrador');
}

},
exports.putusers = async(req, res) => {
    try {
        const { full_name, identification, number, email, password, id_cards} = req.body
        let data= await users.findById(req.params.id);

        if (!data) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
        }

        data.full_name = full_name;
        data.identification = identification;
        data.number = number;
        data.email = email;
        data.password = password;
        data.id_cards = id_cards;
           
    

        data = await users.findOneAndUpdate({ _id: req.params.id }, data, { new: true })
        res.json(data);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}



