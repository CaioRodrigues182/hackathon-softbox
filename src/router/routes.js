
export default [
  {path: '/', component: () => import('layouts/default')},
  {path: '/apps', component: () => import('pages/apps/index')},
  {path: '/permissions', component: () => import('pages/listaPermissoes')},
  {path: '/register/perfil', component: () => import('pages/cadastroPerfil')},
  {path: '/register/aplicacao', component: () => import('pages/apps/create')},
  {path: '/register/funcionalidade', component: () => import('pages/apps/createFunc')},
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
