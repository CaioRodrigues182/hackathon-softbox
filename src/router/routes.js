
export default [
  {path: '/', component: () => import('layouts/default')},
  { path: '/apps', component: () => import('pages/apps/index') },
  { path: '/apps/create', component: () => import('pages/apps/create') },
  { path: '/apps/edit', component: () => import('pages/apps/edit') },
  { path: '/apps/ID', component: () => import('pages/apps/detail') },
  { path: '/apps/perfil', component: () => import('pages/listaPermissoes') },

  { path: '/features', component: () => import('pages/features/index') },
  { path: '/features/create', component: () => import('pages/features/create') },
  { path: '/features/edit', component: () => import('pages/features/edit') },
  { path: '/features/ID', component: () => import('pages/features/detail') },

  { path: '/profiles', component: () => import('pages/profiles/index') },
  { path: '/profiles/create', component: () => import('pages/profiles/create') },
  { path: '/profiles/edit', component: () => import('pages/profiles/edit') },
  { path: '/profiles/ID', component: () => import('pages/profiles/detail') },

  { path: '/users', component: () => import('pages/users/index') },
  { path: '/users/create', component: () => import('pages/users/create') },
  { path: '/users/edit', component: () => import('pages/users/edit') },
  { path: '/users/ID', component: () => import('pages/users/detail') },

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
