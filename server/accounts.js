Accounts.onCreateUser(function(options, user) {
	console.log(options);
  if ( Meteor.users.find().count() === 0 )
	  user.roles = ['super-admin'];
    user.profile = {
      proveedor: 'Distribuidores especializados Oejo SA DE CV.',
      direccion: 'Calle Privada Regio No. Exterior 108 Colonia Regio Parque Industrial Municipio Apodaca Estado Nuevo León México CP. 66633'
    };
    return user;
});

if ( Meteor.users.find().count() === 0 ) {
  var admin = Accounts.createUser({
      email: 'admin@deocejo.com',
      password: 'lechuga'
  });
}
