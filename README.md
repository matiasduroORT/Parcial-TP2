# TALLER DE PROGRAMACION 2

## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador backend en nodejs con express y mongodb.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del backend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.


> 1. Realizar un Fork del presente repositorio ✅
> 2. Realizar un clone del presente repositorio ✅
> 3. Instalar las dependencias ✅
> 4. Solicitar las variables de entorno que contiene la conexion string a mongodb (antes de preguntar, revisa el chat, seguro estan ahí) ✅
> 5. Ejecutar el servidor web de la api REST con el script de npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo, tambien funciona. ✅
> 6. Proba el endpoint que ya se encuentra desarrollado: /api/alumnos debería retornar un json con los alumnos. Sí por algun motivo no llegase a funcionar, solicita asistencia. ✅

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
>
> 1. Necesitamos endpoints que nos permita crear una venta (**sales**) particular por \_id de usuario, y otro que nos permita obtener todas las ventas (**sales**) y tambien filtrada por el id de la misma ✅
> 2. Necesitamos un endpoint que nos permita crear negocios, y obtenerlos filtrandolos por una propiedad que tenga (**storeLocation**). Por emjemplo todas las ventas de las tiendas en Buenos Aires ✅
> 3. El equipo de frontend esta preparando una pagina que permita modificar el nombre de un usuario, crea un endpoint para segun el id de un usuario, enviarle el nombre y modificarlo ✅
> 4. Recientemente nos llegó un requerimiento para verificar que alumnos todavia no hicieron una compra, genera un endpoint que retorne todos los usuarios que su id no aparezca en la lista ventas ✅

## Intrucciones para la entrega

Si ya terminaste o son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Completar el listado de endpoints, especificando parametros si los hubiera, mas abajo en este mismo archivo. ✅
2. Realizar un commit a tu repo con un mensaje con tu nombre completo
3. Realizar un push a tu repositorio
4. Realizar un pull request a mi repositorio

## Listado de Endpoints

### Ventas
> 1. Crear una venta
   - Endpoint: POST /api/sales
   - Body: { "idAlumno": "Number", "amount": "Number", "idStore": "Number" }

> 2. Obtener todas las ventas
   - Endpoint: GET /api/sales

> 3. Obtener venta por ID
   - Endpoint: GET /api/sales/:id
   - Parámetros: "id": "Number"

### Negocios
> 1. Crear un negocio
   - Endpoint: POST /api/stores
   - Body: { "idStore": "Number", "storeLocation": "string" }

> 2. Obtener negocios por ubicación
   - Endpoint: GET /api/stores/location/:storeLocation
   - Parámetros: "storeLocation": "string"

### Alumnos
> 1. Obtener alumnos sin compras
   - Endpoint: GET /api/alumnos/sinCompras

> 2. Modificar nombre de alumno
   - Endpoint: PATCH /api/users/:id
   - Parámetros: id: "Number"
   - Body: { "nombre": "string" }

## 