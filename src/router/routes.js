
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/Index.vue') }
    ]
  },


  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: 'admin.dashboard', component: () => import('src/pages/admin/dashboard.vue') },
      { path: 'login', name: 'admin.login.index', component: () => import('pages/admin/login/Index.vue') },
      { path: 'file/upload', name: 'admin.file.upload', component: () => import('pages/admin/file/Upload.vue') },
      { path: 'file/list', name: 'admin.file.list', component: () => import('pages/admin/file/List.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
