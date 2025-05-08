import Usuario from "../models/Usuario.js"
import Venta from "../models/Venta.js"

export const home = (req, res) => {
    res.send(`<h1>Home de la API</h1>`)
}

export const getUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({error: "Error al obtener usuarios"})
    }
}

export const getUsuariosById = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id)
        if(usuario){
            res.json(usuario)
        }else{
            res.status(404).json({ error: 'Usuario no encontrado'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }

}

export const CrearUsuario = async (req, res) => {  

    const { nombre, edad, email, password } = req.body;
    if(!nombre || !edad || !email || !password){
        return res.status(400).json({error: "Faltan datos"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const usuario = {
        nombre,
        edad,
        email,
        password: hashedPassword
    }

    try {
        const nuevoUsuario = await Usuario.create(usuario)
        res.status(201).json(nuevoUsuario)
    } catch (error) {
        res.status(500).json({error: "Error al crear Usuario"})
    }
    
}

export const modificarNombreUser = async (req, res) => {
    const { nombre } = req.body;
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        usuario.nombre = nombre;
        const usuarioActualizado = await usuario.save();
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el nombre del usuario" });
    }
}

export const getUsuariosSinCompra = async (req, res) => {
    try {
        const usuariosConCompra = await Venta.find().distinct("usuario");
        const todosLosUsuarios = await Usuario.find();

        const usuariosSinCompra = todosLosUsuarios.filter(usuario => 
            !usuariosConCompra.includes(usuario._id.toString())
        );

        if (usuariosSinCompra.length === 0) {
            return res.status(404).json({ message: "Todos los usuarios han realizado compras." });
        }

        res.status(200).json(usuariosSinCompra);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios sin compra." });
    }
};




