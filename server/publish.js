
Meteor.publish('inventario', function () {
  return Inventario.find();
});
Meteor.publish('star_products', function () {
  return StarProducts.find();
});
Meteor.publish('rutas', function () {
  return Rutas.find();
});
Meteor.publish('ordenes', function () {
  return Ordenes.find();
});
Meteor.publish("invoice_items", function() {
	return InvoiceItems.find({ownerId:this.userId}, {});
});
Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {profile: 1}});
});

Meteor.publish(null, function (){
  return Meteor.roles.find({})
});

Meteor.publish('images', function(){ 
	return Images.find(); 
});

Images.allow({
insert: function() { return true; },
update: function() { return true; },
remove: function() { return false; },
download: function() {return true;},
});

