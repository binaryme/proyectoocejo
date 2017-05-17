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
          notas: 'Espacio para agregar notas de entrega', 
          cliente: 'Cliente', 
          sucursal: 'Sucursal',  
          date: new Date(),
          orden: null
      });
    },
    'click tr.ruta': function(event, template)
    {
      var ruta = '/ruta/'+this._id;
      Router.go(ruta);
      console.log(ruta);
    }
});
