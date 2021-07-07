# Proyecto Web basado en el stack Node JS

Este proyecto comprende de dos componentes básicos para el desarrollo en la web, un backend escrito en NodeJS el cual expondrá una
API REST para la interacción con la aplicación frontend escrita usando el Framework Vue js.

Version Web
[![aviaturpro.png](https://i.postimg.cc/hj6wV2TL/aviaturpro.png)](https://postimg.cc/zbw0rSdv)

Version responsiva

[![Captura.png](https://i.postimg.cc/pTgBkTC7/Captura.png)](https://postimg.cc/KkDL8mdr)

## Instalación
 **1. Paso**

 Crear una carpeta local, ingresar a git bash y ejecutar

```
git clone https://github.com/Logicainformatica18/bodegainformatica.git
```
**2. Paso**

- Backend:

Necesitamos tener instalado mongodb como base de datos y luego ejectura el siguiente script para importar los datos de un archivo json

```
mongoimport -h localhost -d test-hotels -c hotels data.json --jsonArray
```
-h localhost
-d nombre de la base de datos
-c collection

-Importante
 Necesitamos tener instalado Node JS 
 
**2. Paso**

- Frontend
 Vas a necesitar instalar vue js
