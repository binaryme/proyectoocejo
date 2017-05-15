# proyectoocejo

Acomodo de carpetas
- client
	- templates 
		- layouts *
			- dashboard *
				dashboard.html *
				dashboard.js *
				dashboard.css *
		- login 
			login.html
			login.js 
			registro.html 
			resetPass.html
- lib
	routes.js *
	- collections
	- controllers



* Esquema de base de datos mongo de ordenes
{
  "Proveedor": "Ocejo",
  "DireccionProveedor": "Regio parque 101\nRegio Parque Industrial",
  "Cliente": "Super Salads",
  "IdDelCliente": "FgEIeioDOfi",
  "EstadoDeLaOrden": "Cancelada",
  "IdDeRuta": "GFndIlskjslb",
  "ProductosEnLaOrden": {
    "IdProducto": "FbDgEAGNB"
    //Los valores debajo comentados son los que se usan del producto, no se escriben en la db
    //"Qty": 1,
    //"Desc": "Lechuga Iceberg",
    //"Linea": "Precortados",
    //"Etiqueta": "Mr. Lucky",
    //"ValorDelPedido": 800
  }
}