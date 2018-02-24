
export default [
  {path: '/', component: () => import('layouts/default')},
  { path: '/apps', component: () => import('pages/apps/index') },
  { path: '/apps/create', component: () => import('pages/apps/create') },
  { path: '/apps/edit', component: () => import('pages/apps/edit') },
  { path: '/apps/ID', component: () => import('pages/apps/detail') },
  { path: '/apps/perfil', component: () => import('pages/listaPermissoes') },
  { path: '/apps/register/perfil', component: () => import('pages/cadastroPerfil') },

  { path: '/features', component: () => import('pages/features/index') },
  // { path: '/features/create', component: () => import('pages/features/create') },
  // { path: '/features/edit', component: () => import('pages/features/edit') },
  // { path: '/features/ID', component: () => import('pages/features/detail') },

  // {
  //   path: '/apps',
  //   component: () => import('pages/apps/index'),
  //   children: [
  //     { path: '/apps/create', component: () => import('pages/apps') },
  //     { path: 'edit', component: () => import('pages/apps/edit') },
  //     { path: 'ID', component: () => import('pages/apps/detail') }
  //   ]
  // },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
