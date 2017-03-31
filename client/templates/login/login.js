Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        if(email=='admin@deocejo.com')
        {
          var admin = true;
        }
        else
        {
          //if (dominio=='deocejo.com')
          //{
          //  var tipo=true;
          //}
          //else
          //{
          //  var tipo=false;
          //}
        }
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                alert('Usuario o contraseña incorrectos.');
            } else {
                if(admin)
                {
                  Router.go('admin');
                }
                else
                {
                  Router.go('/'); 
                }
            }
        });
    }
});
Template.registro.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var admin = false;
        if(email=='admin@deocejo.com')
        {
          var admin = true;
        }
        else
        {
          //if (dominio=='deocejo.com')
          //{
          //  var tipo=true;
          //}
          //else
          //{
          //  var tipo=false;
          //}
        }
        var password = $('[name=password]').val();
        var confirm = $('[name=confirmpassword]').val();
        var nombre = $('[name=nombre]').val();
        var telefono = $('[name=telefono]').val();
        if(password == confirm)
        {
            Accounts.createUser({
                email: email,
                password: password
            }, function(error){
                if(error){
                    alert(error); // Output error if registration fails
                }
                else
                {
                  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.name":nombre,"profile.phone":telefono,"profile.email":email}});
                  if(admin)
                  {
                    Router.go('admin');
                  }
                  else
                  {
                    Router.go('/');
                  }
                }
            });
        }
        else
        {
            alert('Contraseñas no coinciden, intente otra vez.');
        }
    }
});