Meteor.publish('inventario', function () {
  return Inventario.find();
});
Meteor.publish('rutas', function () {
  return Rutas.find();
});
Meteor.publish('ordenes', function () {
  return Ordenes.find();
});
Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {profile: 1}});
});