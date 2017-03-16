Router.configure({
  layoutTemplate: 'dashboard',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/clientes', {
  name: 'clientes',
  controller: 'ClientesController',
  where: 'client'
});

Router.route('/login', {
  name: 'login',
  layoutTemplate: 'login',
  where: 'client'
});