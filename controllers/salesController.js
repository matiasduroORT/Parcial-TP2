import Sale from "../models/sales.js"


export const getSales = async (req, res) => {
    try {
        const sales = await Sale.find()
        res.json(sales)
    } catch (error) {
        res.status(500).json({error: "Error al obtener las ventas"})
    }
}

export const getSaleById = async (req, res) => {

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

export const CrearSale = async (req, res) => {  

    // res.json({
    //     reqBody: req.body,
    //     reqParams: req.params,
    //     reqQuery: req.query,
    // })

    const { idComprador} = req.body;
    if(!idComprador){
        return res.status(400).json({error: "Faltan dato del comprador"})
    }
    
    const sale = {
        idComprador,
    }

    try {
        const nuevoSale = await Sale.create(sale)
        res.status(201).json(nuevoSale)
    } catch (error) {
        res.status(500).json({error: "Error al registrar la venta"})
    }
    
}