import express from 'express';
import mongoose from 'mongoose';
import Alumno from '../models/Alumno.js';
import Sales from '../models/sales.js';

export const crearVenta = async(req, res) => {

    //Tomo el id del alumno y compruebo que se haya ingresado un Id.
    // Luego compruebo si existe el alumno para dicho Id si existe el alumno.
    const idAlumno = req.params.id;

    if(!idAlumno){
        return res.status(500).json({error: "Debe ingresar un ID"})
    }

    const alumno = await Alumno.findOne({_id: idAlumno})

    if(!alumno){
        return res.status(500).json({error: `No se encontro al alumno con id: ${req.params.id}`})
    }

    //Obtengo los datos del body y compruebo que no sean Falsy.
    const {articulo, precio} = req.body;

    if(!articulo || !precio){
        return res.status(400).json({error: "Debe ingresar los datos de la venta."})
    }


    //Creo un nuevo objeto de venta que será agregadoa a la base de datos.
    const nuevaVenta = {
        articulo,
        precio,
        idComprador: idAlumno,
        nombreComprador: alumno.nombre
    }

    //Intento cargar la nueva venta en la BD
    try {
        const ventaRealizada = await Sales.create(nuevaVenta);
        res.status(201).json(ventaRealizada)
    } catch (error){
        res.status(500).json({error: `No se pudo cargar la venta. Error: ${error.message}`})
    }
}

export const obtenerVentas = async(req, res) => {
    //Intento traer todas las ventas realizadas.
    try {
        const ventasRealizadas = await Sales.find();
        res.status(200).json({ventasRealizadas})
    } catch (error) {
        res.status(500).json({error: `Ocurrió un error al intentar cargar las ventas: ${error.message}`})
    }
}

export const obtenerVentasPorId = async(req, res) => {
    //Obtengo el Id de la venta y compruebo si existe.

    const idVenta = req.params.id;
    if(!idVenta){
        return res.status(400).json({error: "Debe ingresar el ID de la venta."})
    }

    //Intento encontrar la venta a la cual le corresponde el ID.
    try {
        const venta = await Sales.findOne({_id: idVenta});
        res.status(200).json({venta})
    } catch (error) {
        res.status(500).json({error: `No se encontro una venta con un id: ${req.params.id}`})
    }
}