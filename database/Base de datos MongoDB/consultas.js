

// consulta para obtener los sitios, ciudad a la que pertenecen y pais al que pertenecen
db.sitios.aggregate([
    {
        $lookup:{
                from:"ciudades",
                localField:"codigo_ciudad._id",
                foreignField:"_id",as:"codigo_ciudad"
            }
    }]).pretty();