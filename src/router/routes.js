
export default [
  {path: '/', component: () => import('layouts/default')},
  { path: '/apps', component: () => import('pages/apps/index') },
  { path: '/apps/create', component: () => import('pages/apps/create') },
  { path: '/apps/:id', component: () => import('pages/apps/detail') },

  { path: '/features', component: () => import('pages/features/index') },
  { path: '/features/create', component: () => import('pages/features/create') },
  { path: '/features/:id', component: () => import('pages/features/index') },

  { path: '/profiles', component: () => import('pages/profiles/index') },
  { path: '/profiles/create', component: () => import('pages/profiles/create') },
  { path: '/profiles/:id', component: () => import('pages/profiles/index') },

  { path: '/users', component: () => import('pages/users/index') },
  { path: '/users/create', component: () => import('pages/users/create') },
  { path: '/users/:id', component: () => import('pages/users/index') },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
