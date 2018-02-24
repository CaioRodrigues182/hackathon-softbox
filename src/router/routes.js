
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: '/options', component: () => import('pages/options') }
    ]
  },
  { // Always leave this as last one
    path: '/options',
    component: (Options) => import('pages/options')
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
