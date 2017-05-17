Meteor.subscribe("ordenes");

Template.RutaContenido.helpers({
  listaOrdenes: function () {
      return Ordenes.find({});
   },
   ordenSelected: function()
    {
        var ruta = Rutas.findOne({_id: Router.current().params._id});
        return Ordenes.findOne({_id: ruta.orden});
    },
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