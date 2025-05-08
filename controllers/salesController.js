import Sale from "../models/Sale.js"
import Alumno from "../models/Alumno.js"


//TO-DO:
export const CreateSale = async (req, res) => {  

    const { precio, producto, idUsuario } = req.body;
    if(!precio || !producto || !idUsuario){
        return res.status(400).json({error: "Faltan datos para crear la venta"})
    }

    const alumnoBuscado = alumnos.findById(idUsuario)   
    if(!alumnoBuscado){
        return res.status(500).json({ error: "ID Invalido"})
    }
    
    const sale = {
        precio, 
        producto, 
        idUsuario}

    try {
        const nuevaSale = await Sale.create(sale)
        res.status(201).json(nuevaSale)
    } catch (error) {
        res.status(500).json({error: "Error al realizar la nueva venta"})
    }
    
}


export const getSalesById = async (req, res) => {

    try {
        const sale = await Sale.findById(req.params.id)
        if(sale){
            res.json(sale)
        }else{
            res.status(404).json({ error: 'Venta no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }

}


export const getSales = async (req, res) => {
    try {
        const sales = await Sale.find()
        res.json(sales)
    } catch (error) {
        res.status(500).json({error: "Error al obtener las ventas"})
    }
}



export const getAlumnosSinCompras = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        const sales = await Sale.find();
        
        const idsConVentas = ventas.map(venta => venta.idUsuario.toString());

        const alumnosSinCompras = alumnos.filter(alumno => {
            return !idsConVentas.includes(alumno._id.toString());
        });

        res.status(200).json(alumnosSinCompras);
    } catch (error) {
        res.status(500).json({ error: "Ocurrio un error" });
    }
}