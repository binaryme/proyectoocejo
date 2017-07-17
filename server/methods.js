Meteor.methods({ //crea cuenta
  creaCuenta: function (email, password, nombre, cliente, permiso) {
    id = Accounts.createUser({
        email: email,
        password: password,
        profile: {
          status: false,
          nombre: nombre,
          cliente: cliente,
          email: email,
          facturacion: {
          rfc: "RFC",
          calle: "Calle",
          numero: 100,
          colonia: "Colonia",
          codigoPostal: 64140,
          poblacion: "Población"
        },
        envio: {
          rfc: "RFC",
          calle: "Calle",
          numero: 100,
          colonia: "Colonia",
          codigoPostal: 64140,
          poblacion: "Población"
        }
      }
    });
    if (id)
      Roles.addUsersToRoles(id, permiso);
  },
  download: function() {
    var collection = Inventario.find().fetch({});
    var heading = false; // Optional, defaults to true
    var delimiter = "," // Optional, defaults to ",";
    return exportcsv.exportToCSV(collection, heading, delimiter);
  },
   parseUpload( data ) {
    check( data, Array );
    console.log(data);
    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ],
          exists = Inventario.findOne( { Etiqueta: item.Etiqueta } );
      if ( !exists ) {
        console.log(item);
        Inventario.insert( item );
      } else {
        console.log( 'Rejected. This item already exists.' );
      }
    }
  }
});