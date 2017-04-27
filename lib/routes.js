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

Router.route('/cliente/:_id', {
  name: 'ClienteInner',
  controller: 'ClienteInnerController',
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

Router.route('/ordenes', {
  name: 'ordenes',
  controller: 'OrdenesController',
  where: 'client'
});

Router.route('/orden/:_id', {
  name: 'OrdenInner',
  controller: 'OrdenInnerController',
  where: 'client'
});



Router.route('/login', {
  name: 'login',
  controller: 'LoginController',
  layoutTemplate: 'login',
  where: 'client'
});

Router.route('/registro', {
  name: 'registro',
  controller: 'RegistroController',
  layoutTemplate: 'registro',
  where: 'client'
});