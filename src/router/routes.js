
export default [
  {path: '/', component: () => import('layouts/default')},
  {path: '/apps', component: () => import('pages/apps/index')},
  {path: '/permissions', component: () => import('pages/listaPermissoes')},
  {path: '/register', component: () => import('pages/cadastroPerfil')},

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
