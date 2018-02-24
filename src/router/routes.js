
export default [
  {path: '/', component: () => import('layouts/default')},

  {
    path: '/apps',
    component: () => import('pages/apps/index'),
    children: [
      { path: 'create', component: () => import('pages/apps/create') },
      { path: 'edit', component: () => import('pages/apps/edit') },
      { path: 'ID', component: () => import('pages/apps/detail') }
    ]
  },

  {path: '/permissions', component: () => import('pages/listaPermissoes')},
  {path: '/register', component: () => import('pages/cadastroPerfil')},

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
