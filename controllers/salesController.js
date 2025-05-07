import Sales from "../models/Sales.js"

export const CrearSales = async (req, res) => {  

    // res.json({
    //     reqBody: req.body,
    //     reqParams: req.params,
    //     reqQuery: req.query,
    // })

    const { idAlumno, amount, idStore } = req.body;
    if(!idAlumno, !amount, !idStore){
        return res.status(400).json({error: "Faltan datos"})
    }    
    const sale = {
        idAlumno,
        amount,
        idStore
    }

    try {
        const nuevoSale = await Sales.create(sale)
        res.status(201).json(nuevoSale)
    } catch (error) {
        res.status(500).json({error: "Error al crear venta"})
    }
    
}

export const getSales = async (req, res) => {
    try {
        const sales = await Sales.find()
        res.json(sales)
    } catch (error) {
        res.status(500).json({error: "Error al obtener venta"})
    }
}

export const getSalesById = async (req, res) => {

    try {
        const sale = await Sales.findById(req.params.id)
        if(sale){
            res.json(sale)
        }else{
            res.status(404).json({ error: 'Venta no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Venta Invalido"})
    }

}