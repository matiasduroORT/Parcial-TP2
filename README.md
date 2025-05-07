Este readme corresponde a las pruebas que fui haciendo del proyecto.

Ivan Agustin Zarate

TP2-C

Se implementaron los siguientes endpoints

*Ventas*
POST /api/ventas - Crear una venta asociada a un alumno
GET /api/ventas - Obtener todas las ventas
GET /api/ventas/:id - Obtener una venta específica por ID
*Negocios*
POST /api/negocios - Crear un nuevo negocio
GET /api/negocios/ubicacion/:ubicacion - Obtener negocios filtrados por ubicación
*Alumnos*
PUT /api/alumnos/:id - Actualizar el nombre de un alumno
GET /api/alumnos-sin-compras - Obtener alumnos que no han realizado compras


XOXOXOXOXXOXOXOXOXOXOXOXOXOXO Ventas XOXOXOXOXOXOXOXOXOXOXOXXOXOXOXOXOXOX

1. Creando una venta con ID de alumno válido

curl -X POST http://localhost:3000/api/ventas \
  -H "Content-Type: application/json" \
  -d '{
    "alumnoId": "681be42d3132102e42988a09",
    "monto": 1500,
    "descripcion": "Curso de en ORT de java",
    "estado": "pendiente"
  }'

## Resultado 

  curl -X POST http://localhost:3000/api/ventas \
  -H "Content-Type: application/json" \
  -d '{
    "alumnoId": "681be42d3132102e42988a09",
    "monto": 1500,
    "descripcion": "Curso de en ORT de java",
    "estado": "pendiente"
  }'

  2. Intentando crear una venta con ID de alumno inválido
     Queria probar qué pasaba si mandaba cualquier cosa como ID:

     curl -X POST http://localhost:3000/api/ventas \
  -H "Content-Type: application/json" \
  -d '{
    "alumnoId": "10",
    "monto": 1500,
    "descripcion": "Curso de en ORT de java",
    "estado": "pendiente"
  }'

## Resultado 

  {"error":"Error al crear la venta"}


  3. Obteniendo todas las ventas

  Para ver si realmente se guardó, hice un GET:

  curl -X GET http://localhost:3000/api/ventas


## Resultado 

  [
  {
    "_id": "681bebefb8ab38786d65aa7d",
    "alumno": {
      "_id": "681be42d3132102e42988a09",
      "nombre": "Martin",
      "email": "admin@admin.com"
    },
    "monto": 1500,
    "descripcion": "Curso de en ORT de java",
    "estado": "pendiente",
    "createdAt": "2025-05-07T23:25:35.952Z",
    "updatedAt": "2025-05-07T23:25:35.952Z",
    "__v": 0
  }
]

Lo bueno es que me trae los datos del alumno también, eso lo hice con el populate() que vimos en clase.

4. Obteniendo una venta específica por ID

También probé buscar una venta específica

curl -X GET http://localhost:3000/api/ventas/681bebefb8ab38786d65aa7d

## Resultado

{
  "_id": "681bebefb8ab38786d65aa7d",
  "alumno": {
    "_id": "681be42d3132102e42988a09",
    "nombre": "Martin",
    "email": "admin@admin.com"
  },
  "monto": 1500,
  "descripcion": "Curso de en ORT de java",
  "estado": "pendiente",
  "createdAt": "2025-05-07T23:25:35.952Z",
  "updatedAt": "2025-05-07T23:25:35.952Z",
  "__v": 0
}

XOXOXOXOXOXOXOXXOXO   Gestión de Alumnos  XOXOXOXOXOXOXOXOXOXOXOXXOXO

1. Obteniendo alumnos sin compras

curl -X GET http://localhost:3000/api/alumnos-sin-compras


## Resultado (antes de crear ventas)
[
  {
    "_id": "681be42d3132102e42988a09",
    "nombre": "Martin",
    "edad": 40,
    "email": "admin@admin.com",
    "password": "123",
    "createdAt": "2025-05-07T22:52:29.826Z",
    "updatedAt": "2025-05-07T22:52:29.826Z",
    "__v": 0
  },
  {
    "_id": "681be42e3132102e42988a11",
    "nombre": "Martin 2",
    "edad": 40,
    "email": "admin2@admin.com",
    "password": "$2b$10$ShZDloNK3ngDjoSn0GOAOuh.oAyXwEvNfptfsV/TKzrjOWAvMsEEe",
    "createdAt": "2025-05-07T22:52:30.229Z",
    "updatedAt": "2025-05-07T22:52:30.229Z",
    "__v": 0
  }
]

2. Actualizando el nombre de un alumno

curl -X PUT http://localhost:3000/api/alumnos/681be42d3132102e42988a09 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Martín Actualizado"
  }'

## Resultado

{
  "_id": "681be42d3132102e42988a09",
  "nombre": "Martín Actualizado",
  "edad": 40,
  "email": "admin@admin.com",
  "password": "123",
  "createdAt": "2025-05-07T22:52:29.826Z",
  "updatedAt": "2025-05-07T23:26:41.265Z",
  "__v": 0
}

Me di cuenta que el updatedAt se actualiza solo, eso está bueno.

3. Verificando alumnos sin compras después de crear ventas

Después de crear una venta para Martín, volví a probar el endpoint de alumnos sin compras:

curl -X GET http://localhost:3000/api/alumnos-sin-compras

## Resultado

[
  {
    "_id": "681be42e3132102e42988a11",
    "nombre": "Martin 2",
    "edad": 40,
    "email": "admin2@admin.com",
    "password": "$2b$10$ShZDloNK3ngDjoSn0GOAOuh.oAyXwEvNfptfsV/TKzrjOWAvMsEEe",
    "createdAt": "2025-05-07T22:52:30.229Z",
    "updatedAt": "2025-05-07T22:52:30.229Z",
    "__v": 0
  }
]

Y efectivamente, Martín ya no aparece porque tiene una compra.

XOXOXOXOXOXOXOXXOXO   Gestión de Negocios  XOXOXOXOXOXOXOXOXOXOXOXXOXO

1. Creando negocios
Probé crear un par de negocios con ubicaciones diferentes:

curl -X POST http://localhost:3000/api/negocios \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Academia Buenos Aires",
    "ubicacion": "Buenos Aires",
    "direccion": "Av. Corrientes 1234",
    "telefono": "11-1234-5678",
    "email": "info@academiaba.com"
  }'

  ## Resultado

  {
  "nombre": "Academia Buenos Aires",
  "ubicacion": "Buenos Aires",
  "direccion": "Av. Corrientes 1234",
  "telefono": "11-1234-5678",
  "email": "info@academiaba.com",
  "activo": true,
  "_id": "681bec0fb8ab38786d65aa83",
  "createdAt": "2025-05-07T23:26:07.451Z",
  "updatedAt": "2025-05-07T23:26:07.451Z",
  "__v": 0
}


---------

curl -X POST http://localhost:3000/api/negocios \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Instituto Córdoba",
    "ubicacion": "Córdoba",
    "direccion": "Av. Principal 567",
    "telefono": "351-987-6543",
    "email": "contacto@institutocordoba.com"
  }'


  ## Resultado

  {
  "nombre": "Instituto Córdoba",
  "ubicacion": "Córdoba",
  "direccion": "Av. Principal 567",
  "telefono": "351-987-6543",
  "email": "contacto@institutocordoba.com",
  "activo": true,
  "_id": "681bec18b8ab38786d65aa85",
  "createdAt": "2025-05-07T23:26:16.742Z",
  "updatedAt": "2025-05-07T23:26:16.742Z",
  "__v": 0
}


2. Filtrando negocios por ubicación

curl -X GET http://localhost:3000/api/negocios/ubicacion/Buenos%20Aires

## Resultado

[
  {
    "_id": "681bec0fb8ab38786d65aa83",
    "nombre": "Academia Buenos Aires",
    "ubicacion": "Buenos Aires",
    "direccion": "Av. Corrientes 1234",
    "telefono": "11-1234-5678",
    "email": "info@academiaba.com",
    "activo": true,
    "createdAt": "2025-05-07T23:26:07.451Z",
    "updatedAt": "2025-05-07T23:26:07.451Z",
    "__v": 0
  }
]

---------

curl -X GET http://localhost:3000/api/negocios/ubicacion/Córdoba

## Resultado

[
  {
    "_id": "681bec18b8ab38786d65aa85",
    "nombre": "Instituto Córdoba",
    "ubicacion": "Córdoba",
    "direccion": "Av. Principal 567",
    "telefono": "351-987-6543",
    "email": "contacto@institutocordoba.com",
    "activo": true,
    "createdAt": "2025-05-07T23:26:16.742Z",
    "updatedAt": "2025-05-07T23:26:16.742Z",
    "__v": 0
  }
]


