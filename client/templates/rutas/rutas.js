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
Template.rutas.events({
  	'click a.guardar': function(event, template) 
  	{
  		event.preventDefault();
      var id = Rutas.find().count();
      var ordenes = Rutas.insert({
          numRuta: id, 
          zona: 'Country', 
          ciudad: 'Monterrey', 
          ordenes: 0,
          notas: 'Espacio para agregar notas de entregado',  
          date: new Date()
      });
      var ruta = '/ruta/'+ordenes;
      Router.go(ruta);
    },
    'click tr.ruta': function(event, template)
    {
      var ruta = '/ruta/'+this._id;
      Router.go(ruta);
      console.log(ruta);
    }
});
