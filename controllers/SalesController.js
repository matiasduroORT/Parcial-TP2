import Sale from '../models/Sales.js';

export const crearVenta = async (req, res) => {
  
  const { userId, date } = req.body;
      if(!userId || !date){
          return res.status(400).json({error: "Faltan datos"})
      }
  
      const venta =({
        userId,
        date,
      });
  
  try {
    const nuevaVenta = await Sale.create(venta);
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear venta', error: error.message });
  }
};

export const obtenerVentas = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const venta = await Sale.findById(id);
      if (!venta) return res.status(404).json({ mensaje: 'Venta no encontrada' });
      return res.json(venta);
    }

    const ventas = await Sale.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener ventas', error: error.message });
  }
};
