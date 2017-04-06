Accounts.onCreateUser(function(options, user) {
	console.log(options);
	user.roles = ['Cliente'];
    return user;
});

if ( Meteor.users.find().count() === 0 ) {
    var id = Accounts.createUser({
      username: 'admin',
      email: 'admin@deocejo.com',
      password: 'lechuga',
      profile: {
          first_name: 'Emilio',
          last_name: 'Ocejo',
          company: 'Deocejo',
      }
  });
  Roles.addUsersToRoles(id, user.roles, 'Admin');
}