Meteor.publish('inventario', function () {
  return Inventario.find();
});
Meteor.publish('rutas', function () {
  return Rutas.find();
});