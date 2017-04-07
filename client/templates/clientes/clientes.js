Meteor.subscribe("users");

Template.clientes.helpers({
  listaUsuarios: function () {
      return Meteor.users.find({});
   }
});