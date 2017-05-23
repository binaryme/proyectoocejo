Meteor.subscribe("ordenes");

Template.RutaContenido.helpers({
  listaOrdenes: function () {
      return Ordenes.find({ruta: Router.current().params._id});
   }
});

Template.RutaContenido.events({
   'change select#orden': function(event) 
    {
      event.preventDefault();
      var id = $('[name=OrdenAsignada]').val();
      Rutas.update(Router.current().params._id, {
        $set: { orden: id}
      });
    }
});