Meteor.methods({ //crea cuenta
  creaCuenta: function (email, password, nombre, cliente, permiso) {
    id = Accounts.createUser({
        email: email,
        password: password,
        profile: {
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
  }
   //termina creaCuenta método
  //'borrar-imagen': function (id) {
  //  Images.remove({_id: id});
  //  console.log(alias);
  //}
});