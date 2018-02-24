
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/options',
    component: () => import('pages/options'),
    children: [
      { path: '/options', component: () => import('pages/options') }
    ]
  },
  {
    path: '/permissions',
    component: () => import('pages/listaPermissoes'),
    children: [
      { path: '/permissions', component: () => import('pages/listaPermissoes') }
    ]
  },
  {
    path: '/register',
    component: () => import('pages/cadastroPerfil'),
    children: [
      { path: '/register', component: () => import('pages/cadastroPerfil') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
