const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringAsArray');

module.exports ={
async index(req,res){
    // Buscar todos os devs num raio 10km
    // filtrar  por tecnologias

    const {latitude, longitude,techs} = req.query;

    const techsArray = parseStringArray(techs);

    const devs = await Dev.find({
        techs:{
            $in: techsArray,
        },
        locations:{
            $near:{
                $geometry:{
                    type:'Point',
                    coordinates:[longitude,latitude]
                },
                $maxDistance: 10000
            }
        }
    })
  

    return res.json({devs})
    }
}