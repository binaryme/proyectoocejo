Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        if(email=='admin@deocejo.com')
        {
          var admin = true;
        }
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                alert('Usuario o contraseña incorrectos.');
            } else {
            }
        });
    }
});
Template.registro.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        //var admin = false;
        var password = $('[name=password]').val();
        var nombre = $('[name=nombre]').val();
        var cliente = $('[name=cliente]').val();
        var permiso = Session.get('TipoCuenta');
        console.log(permiso);
        Meteor.call('creaCuenta', email, password, nombre, cliente, permiso);
        Router.go('clientes')
    },
    'change select': function(event){
       event.preventDefault();
       var selectValue = event.target.value;
       Session.set('TipoCuenta', selectValue);
    }
});
Template.registro.onRendered(function () {
    Session.setDefault('TipoCuenta', 'Cliente');
});