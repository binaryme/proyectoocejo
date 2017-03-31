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

Router.route('/inventario', {
  name: 'inventario',
  controller: 'InventarioController',
  where: 'client'
});

Router.route('/rutas', {
  name: 'rutas',
  controller: 'RutasController',
  where: 'client'
});



Router.route('/login', {
  name: 'login',
  controller: 'LoginController',
  layoutTemplate: 'login',
  where: 'client'
});