/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});
*/
Template.ordenes.events({
  	'click a.guardar-orden': function(event, template) 
  	{
  		event.preventDefault();
      var id = Ordenes.find().count();
      var orden = Ordenes.insert({
          noorden: id, 
          descripcion: 'Orden de ejemplo', 
          cliente: 'Cliente ejemplo', 
          sucursal: 'Sucursal ejemplo',  
          date: new Date(),
          proveedor: Meteor.user().profile.proveedor,
          direccionproveedor: Meteor.user().profile.direccion
      });
      var ruta = '/orden/'+orden;
      Router.go(ruta);
    },
    'click tr.orden': function(event, template)
    {
      var ruta = '/orden/'+this._id;
      Router.go(ruta);
      console.log(ruta);
    }
    //'submit form': function(event){
    //    event.preventDefault();
    //    var cliente = $('[name=cliente]').val();
    //    var nombre = $('[name=nombre]').val();
    //    var calle = $('[name=calle]').val();
    //    var colonia = $('[name=colonia]').val();
    //    var postalcode = $('[name=postalcode]').val();
    //    var latitud = $('[name=latitud]').val();
    //    var longitud = $('[name=longitud]').val();
    //    var sucursal = $('[name=sucursal]').val();
    //    var ciudad = $('[name=ciudad]').val();
    //    $('[name=cliente]').val('');
    //    $('[name=nombre]').val('');
    //    $('[name=calle]').val('');
    //    $('[name=colonia]').val('');
    //    $('[name=latitud]').val('');
    //    $('[name=longitud]').val('');
    //    $('[name=ciudad]').val('');
    //    var ordenes = Ordenes.insert({
    //      cliente: cliente, 
    //      nombre: nombre, 
    //      calle: calle, 
    //      colonia: colonia, 
    //      postalcode: postalcode, 
    //      estado: sucursal, 
    //      ciudad: ciudad, 
    //      latitud: latitud,
    //      longitud: longitud, 
    //      user: Meteor.userId(), 
    //      date: new Date()
    //    });
    //    alert('Orden guardada correctamente.');
    //    $('#newOrden').modal('hide');
    //}
});
