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
    },
    'click tr.orden': function(event, template)
    {
      var ruta = '/orden/'+this._id;
      Router.go(ruta);
      console.log(ruta);
    },
    'click .borrar-ruta': function(event, template) {
      var borrar = confirm("¿Seguro que quieres borrar esta ruta de la base de datos?")
      if (borrar){
        Rutas.remove({_id: this._id});
        Router.go("/rutas");
      }
      else{
        console.log("no borra la imágen");
      }
    }
});