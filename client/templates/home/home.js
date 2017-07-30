Meteor.subscribe("users");
Meteor.subscribe("ordenes");
Meteor.subscribe("rutas");
Meteor.subscribe("inventario");

Template.home.events({
});
Template.home.helpers({
  countOrdenes: function() {
      return Ordenes.find({}).count();
  },
  countInventario: function() {
      return Inventario.find({}).count();
  },
  countRutas: function() {
      return Rutas.find({}).count();
  },
  countClientes: function() {
      return Meteor.users.find({}).count();
  },
  listaOrdenes: function() {
      return Ordenes.find({}, { sort: { date: -1 } });
  },
}); 