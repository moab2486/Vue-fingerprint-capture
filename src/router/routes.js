export default [
  {
    path: '/',
    name: 'browse community',
    component: () => import('./views/BrowseCommunity.vue')
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('./views/upcoming.vue')
  },

  {
    path: '/browse-startup',
    name: 'browse startup',
    component: () => import('./views/upcoming.vue')
  },

  {
    path: '/messaging',
    name: 'messaging',
    component: () => import('./views/upcoming.vue')
  },

  {
    path: '/notification',
    name: 'notification',
    component: () => import('./views/upcoming.vue')
  }
]